import * as React from 'react';
import { Action, Worker } from 'reactronic';
import { reactive } from 'reactronic-toolkit-react';
import { App, appMon } from '../models/App.z';
import { LiveCode } from '../components/LiveCode';
import { LiveState } from '../components/LiveState';
import { Demo } from '../components/Demo';
import * as css from './Main.css';

export function Main(p: {app: App, action?: Action}): JSX.Element {
  return reactive(() => {
    let ops: Worker[] = Array.from(appMon.workers.values());
    let action: Action | undefined = ops.length > 0 ? ops[0] as Action : undefined;
    return (
      <div className={css.app}>
        <div className={css.body}>
          <div className={css.summary}>
            <h1>
              Reactronic Live Demo
              <a className={css.ribbon} href="https://github.com/nezaboodka/reactronic-demo">
                @ GitHub
              </a>
            </h1>
            <a href="https://github.com/Nezaboodka/reactronic#readme">Reactronic</a> is
            a JavaScript library that
            provides <a href="https://blog.nezaboodka.com/post/2019/593-modern-database-should-natively-support-transactionally-reactive-programming">transactionally reactive state management</a> in
            a Web application.
            Transactional reactivity means that state changes are being made in an
            isolated data snapshot and then, once atomically committed, are consistently
            propagated to corresponding visual components for (re)rendering. All that is
            done in automatic, seamless, and fine-grained way.
          </div>
          <div className={css.demo}>
            <Demo app={p.app}/>
          </div>
          <div className={css.state}>
            <LiveState app={p.app}/>
          </div>
          <div className={css.modelCode}>
            <LiveCode app={p.app} action={action}/>
          </div>
        </div>
      </div>
    );
  });
}
