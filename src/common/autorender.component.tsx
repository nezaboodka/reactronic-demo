import * as React from 'react';
import { Transaction, cache, Renew, Reactronic } from 'reactronic';

export class AutoRenderComponent<P extends { tran?: Transaction }, S = never, SS = never> extends React.Component<P, S, SS> {
  @cache(Renew.Immediately)
  trigger(): void {
    // This method is automatically and immediately re-executed
    // when cached value of this.render is invalidated.
    if (this.render.reactronic.isInvalidated)
      this.setState({}); // enqueue re-rendering
  }

  componentDidMount(): void {
    if (super.componentDidMount)
      super.componentDidMount();
    // Mark this.trigger to be re-executed automatically
    // upon invalidation due to changes of its dependencies.
    this.trigger(); // first run to identify initial dependencies
  }

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
    // Update component either if this.render is invalidated
    // or if props are different from the current ones.
    let rt = this.render.reactronic;
    return rt.isInvalidated || rt.invalidate(diff(this.props, nextProps));
  }

  componentWillUnmount(): void {
    Reactronic.unmount(this); // cleanup
    if (super.componentWillUnmount)
      super.componentWillUnmount();
  }
}

function diff(obj1: any, obj2: any): string | undefined {
  let result: string | undefined = undefined;
  if (obj1 !== obj2) {
    if (obj1 === Object(obj1) && obj2 === Object(obj2)) {
      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);
      if (keys1.length === keys2.length) {
        let i = 0;
        const n = keys1.length;
        while (i < n && result === undefined) {
          if (obj1[keys1[i]] !== obj2[keys2[i]])
            result = `${obj2.constructor.name}.${keys2[i]}=${obj2[keys2[i]]}`;
          i++;
        }
      }
      else
        result = `${obj2}`;
    }
    else
      result = `${obj2}`;
  }
  return result;
}
