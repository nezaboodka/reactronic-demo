import * as React from 'react';
import { Transaction } from 'reactronic';
import { autorender } from '../common/autorender';
import { App, appMon } from '../models/App.z';
import * as css from './LiveCode.css';
import * as tsx from '../common/tsx.css';

export function LiveCode(p: {app: App, tran?: Transaction}): JSX.Element {
  return autorender(() => {
    const bp = p.app.debug;
    return (
      <div>
      <pre className={css.code + " " + tsx.syntax}>

<i>// MODEL</i><br/><br/>
<strong>@stateful</strong><br/>
<b>class</b> <u>App</u> {"{"}<br/>
&nbsp; url: <u>string</u> = <i>'https://uinames.com/api/'</i>;<br/>
&nbsp; data: <u>string</u> = <i>'Please, press FETCH...'</i>;<br/>
&nbsp; fetched: <u>Date</u> = <b>new</b> <u>Date</u>(0);<br/>
<br/>
<div style={appMon.isIdle ? {} : {backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
&nbsp; <strong>@transaction</strong> <strong>@monitor</strong>(appMon)<br/>
&nbsp; <b>async</b> <span className={cls("fetch.0", bp)}><em>fetch</em>()</span>: <u>Promise{"<"}void{">"}</u> {"{"}<br/>
&nbsp;&nbsp;&nbsp; <span className={cls("fetch.1", bp)}><b>let</b> r = <b>await</b> http.<em>fetch</em>(<b>this</b>.url);</span><br/>
&nbsp;&nbsp;&nbsp; <span className={cls("fetch.2", bp)}><b>this</b>.data = <b>await</b> r.<em>text</em>();</span><br/>
&nbsp;&nbsp;&nbsp; <span className={cls("fetch.3", bp)}><b>this</b>.fetched = <b>new</b> <u>Date</u>();</span><br/>
&nbsp; <span className={cls("fetch.4", bp)}>{"}"} <i>// apply snapshot</i></span><br/>
</div>
{"}"}<br/><br/>
<b>const</b> appMon = <u>Monitor</u>.<em>new</em>();<br/>
<b>const</b> application = <b>new</b> <u>App</u>();<br/><br/>

<i>// VIEW</i><br/><br/>
<b>function</b> <u>AppView</u>(p: {"{"}app: <u>App</u>{"})"} {"{"}<br/>
&nbsp;<i>// autorender = Reactronic + React Hooks</i><br/>
&nbsp;<b>return</b> <em>autorender</em>(() => {"{"}<br/>
&nbsp; <b>return</b> (<br/>
&nbsp;  <b>{"<"}div{">"}</b><br/>
&nbsp;   <b>{"<"}input</b> value={"{"}p.app.url{"}"}<br/>
&nbsp;    <em>onChange</em>={"{"}e => p.app.url = e.target.value{"}"}<b>{"/>"}</b><br/>
&nbsp;   <b>{"<"}button</b> disabled={"{"}!appMon.isIdle{"}"}<br/>
&nbsp;    <em>onClick</em>={"{"}e => p.app.<em>fetch</em>(){"}"} <b>{">"}</b>FETCH<b>{"<"}/button{">"}</b><br/>
&nbsp;   <b>{"<"}pre{">"}</b><br/>
&nbsp;    {"{"}p.app.data{"}"}<br/>
&nbsp;    <b>{"<"}img</b> src=<i>"spin.svg"</i> hidden={"{"}appMon.isIdle{"}"}<b>{"/>"}</b><br/>
&nbsp;   <b>{"</"}pre</b>{">"}<br/>
&nbsp;  <b>{"<"}/div{">"}</b><br/>
&nbsp; );<br/>
&nbsp;{"}"}<br/>
{"}"}<br/>
<br/>
React.<em>render</em>({"<"}<u>AppView</u> app={"{"}application{"}"}/>)<br/>

</pre>
</div>);
  });
}

function cls(line: string, bp: string): string {
  return line === bp ? css.current : css.normal;
}
