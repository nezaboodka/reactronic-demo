import * as React from 'react';
import { Transaction, stateful, cache, Renew, Reactronic, Debug, transaction } from 'reactronic';

export function autorender(render: (revision: number) => JSX.Element, tran?: Transaction): JSX.Element {
  const [jsx] = React.useState(() => tran ? tran.view(createJsx) : createJsx());
  const [revision, refresh] = React.useState(0);
  React.useEffect(unmountEffect(jsx), []);
  return tran ? tran.view(() => jsx.render(revision, render, refresh)) : jsx.render(revision, render, refresh);
}

@stateful
class Jsx {
  @transaction
  render(revision: number, render: (revision: number) => JSX.Element, refresh: (nextRevision: number) => void): JSX.Element {
    let jsx: JSX.Element = this.jsx(revision, render);
    this.trigger(revision + 1, refresh);
    return jsx;
  }

  @cache(Renew.OnDemand)
  jsx(revision: number, render: (revision: number) => JSX.Element): JSX.Element {
    return render(revision);
  }

  @cache(Renew.Immediately)
  trigger(nextRevision: number, refresh: (nextRevision: number) => void): void {
    if (this.jsx.reactronic.isInvalidated)
      refresh(nextRevision);
  }
}

function createJsx(): Jsx {
  let hint = Debug.verbosity >= 1 ? getComponentName() : undefined;
  return Transaction.run<Jsx>(() => Reactronic.setHint(new Jsx(), hint));
}

function unmountEffect(jsx: Jsx): React.EffectCallback {
  return () => {
    // did mount
    return () => {
      // will unmount
      Reactronic.unmount(jsx);
    };
  };
}

function getComponentName(): string | undefined {
  let up = 1;
  let error = new Error();
  let stack = error.stack || "";
  let result: string = stack.split("\n")[up + 6] || "";
  result = (result.match(/^\s*at\s*(\S+)/) || [])[1];
  return result;
}
