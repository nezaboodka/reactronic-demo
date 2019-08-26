import * as React from 'react';
import { Transaction, stateful, transaction, cache, Renew, ApartFrom, ReactiveCache, Debug } from 'reactronic';

export function autorender(render: (revision: number) => JSX.Element, tracing: number = 0, tran?: Transaction): JSX.Element {
  const [jsx] = React.useState(() => tran ? tran.view(createJsx, tracing) : createJsx(tracing));
  const [revision, refresh] = React.useState(0);
  React.useEffect(unmountEffect(jsx), []);
  return tran ? tran.view(() => jsx.render(revision, render, refresh)) : jsx.render(revision, render, refresh);
}

@stateful
class Jsx {
  @transaction
  render(revision: number, doRender: (revision: number) => JSX.Element, refresh: (nextRevision: number) => void): JSX.Element {
    let jsx: JSX.Element = this.jsx(revision, doRender);
    this.trigger(revision + 1, refresh);
    return jsx;
  }

  @cache(Renew.OnDemand)
  jsx(revision: number, render: (revision: number) => JSX.Element): JSX.Element {
    return render(revision);
  }

  @cache(Renew.Immediately)
  trigger(nextRevision: number, refresh: (nextRevision: number) => void): void {
    if (this.jsx.rcache.isInvalidated)
      refresh(nextRevision);
  }
}

function createJsx(tracing: number): Jsx {
  let dbg = tracing !== 0 || Debug.verbosity >= 2;
  let hint = dbg ? getComponentName() : undefined;
  return Transaction.runAs<Jsx>(dbg ? `${hint}` : "new-jsx", ApartFrom.Reaction, 0, () => {
    let jsx = new Jsx();
    if (dbg) {
      jsx = ReactiveCache.named(jsx, hint);
      jsx.render.rcache.configure({tracing});
      jsx.jsx.rcache.configure({tracing});
      jsx.trigger.rcache.configure({tracing});
    }
    return jsx;
  });
}

function unmountEffect(jsx: Jsx): React.EffectCallback {
  return () => {
    // did mount
    return () => {
      // will unmount
      ReactiveCache.unmount(jsx);
    };
  };
}

function getComponentName(): string | undefined {
  let error = new Error();
  let stack = error.stack || "";
  let lines = stack.split("\n");
  let i = lines.findIndex(x => x.indexOf(".autorender") >= 0) || 6;
  let result: string = lines[i + 1] || "";
  result = (result.match(/^\s*at\s*(\S+)/) || [])[1];
  return `<${result}>`;
}
