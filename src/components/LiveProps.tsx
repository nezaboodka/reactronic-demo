import * as React from 'react';
import { Transaction } from 'reactronic';
import { autorender } from '../common/autorender';
import * as css from './LiveCode.css';

export function LiveProps(p: {object: any, except: string[], margin?: number, blink?: boolean, tran?: Transaction}): JSX.Element {
  return autorender(() => {
    let items: string[] = Object.getOwnPropertyNames(p.object);
    items = items.filter(name => p.except.indexOf(name) < 0);
    return (
      <div>
       {items.map((prop, index) => <div key={prop}>&nbsp;{" ".repeat(p.margin || 0)}{prop}: <i>'<LiveProp object={p.object} prop={prop} blink={p.blink} tran={p.tran}/>'</i>,</div>)}
      </div>
    );
  }, 0, p.tran);
}

export function LiveProp(p: {object: any, prop: PropertyKey, multiline?: boolean, blink?: boolean, tran?: Transaction}): JSX.Element {
  return autorender(revision => {
    let v = p.object[p.prop];
    let value = valueToString(v, p.multiline);
    let cls = css.normal;
    if (p.blink)
      cls = (revision % 2) ? css.blink1 : css.blink2;
    return <span className={cls}>{value}</span>;
  }, 0, p.tran);
}

function valueToString(v: any, multiline?: boolean): string {
  if (v === undefined || v === null)
    v = "";
  let value: string;
  if (v instanceof Date)
    value = v.valueOf() === 0 ? "" : v.toISOString().slice(11, 23) + "Z";
  else if (v instanceof Function)
    value = "function {...}";
  // else if (typeof v === "number")
  //   value = v.toFixed(1);
  else
    value = v.toString();
  if (!multiline) {
    let i = value.indexOf("\n");
    if (i >= 0)
      value = value.slice(0, Math.min(i, 19)) + "...";
  }
  return value;
}
