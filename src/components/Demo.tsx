import * as React from 'react';
import { reactiveRender } from '../common/reactivity';
import { App, appMon } from '../models/App.z';
import { LiveProp } from '../components/LiveProps';
import * as css from './Demo.css';

export function Demo(p: {app: App}): JSX.Element {
  return reactiveRender(revision => {
    return (
      <div className={css.demo}>
        <input onChange={e => p.app.setUrl(e.target.value)}
          value={p.app.url} autoFocus={true} spellCheck={false}/>
        <button onClick={e => p.app.fetch()} disabled={!appMon.isIdle}>FETCH</button>
        <pre>
          <LiveProp object={p.app} prop="data" multiline={true} blink={true}/>
          <img hidden={appMon.isIdle} src="assets/spinner.svg"/>
        </pre>
      </div>
    );
  });
}
