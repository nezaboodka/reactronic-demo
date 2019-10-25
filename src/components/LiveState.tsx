// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2017-2019 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic/master/LICENSE

import * as React from 'react';
import { Action, Worker } from 'reactronic';
import { reactive } from 'reactronic-toolkit-react';
import { App, appMon } from '../models/App.z';
import { LiveProps } from '../components/LiveProps';
import * as css from './LiveCode.css';
import * as tsx from '../common/tsx.css';

export function LiveState(p: {app: App}): JSX.Element {
  return reactive(() => {
    const except = ["debug", "fetch"];
    let workers: Worker[] = Array.from(appMon.workers.values());
    return (
      <pre className={css.code + " " + tsx.syntax} style={{backgroundColor: "transparent", boxShadow: "none", minHeight: "13.75em"}}>
        <i>// STATE</i><br/><br/>
        application: {"{"}<br/>
        <LiveProps object={p.app} except={except} margin={0} blink={true}/>
        {workers.map((worker, index) => (
          <div key={worker.id} style={{marginTop: "0.5em", overflow: "hidden", backgroundColor: "rgba(255, 255, 255, 0.1)", maxWidth: "100%"}}>
            &nbsp;.snapshot_{worker.id} = {"{"}<br/>
            <LiveProps object={p.app} except={except} margin={1} blink={true} action={worker as Action}/>
            &nbsp;{"}"}<br/>
          </div>
        ))}
        {"}"}
      </pre>
    );
  });
}
