import * as React from 'react';
import { Operation } from 'reactronic';
import { reactiveRender } from '../common/reactivity';
import { App, appMon } from '../models/App.z';
import { LiveProps } from '../components/LiveProps';
import * as css from './LiveCode.css';
import * as tsx from '../common/tsx.css';

export function LiveState(p: {app: App}): JSX.Element {
  return reactiveRender(() => {
    const except = ["debug", "fetch"];
    let ops: Operation[] = Array.from(appMon.operations.values());
    return (
      <pre className={css.code + " " + tsx.syntax} style={{backgroundColor: "transparent", boxShadow: "none", minHeight: "13.75em"}}>
        <i>// STATE</i><br/><br/>
        application: {"{"}<br/>
        <LiveProps object={p.app} except={except} margin={0} blink={true}/>
        {ops.map((op, index) => (
          <div key={op.tran.id} style={{marginTop: "0.5em", overflow: "hidden", backgroundColor: "rgba(255, 255, 255, 0.1)", maxWidth: "100%"}}>
            &nbsp;.snapshot_{op.tran.id} = {"{"}<br/>
            <LiveProps object={p.app} except={except} margin={1} blink={true} tran={op.tran}/>
            &nbsp;{"}"}<br/>
          </div>
        ))}
        {"}"}
      </pre>
    );
  });
}
