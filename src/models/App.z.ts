import { stateful, transaction, monitor, sleep, Transaction, SeparateFrom } from 'reactronic';
import { appMon, pretty } from './App';
export { appMon } from './App';
import fetch from 'node-fetch';

@stateful
export class App {
  url: string = "https://uinames.com/api/";
  data: string = "Please, press FETCH button\nto get content from the given URL\nand you will see what is going on\nunder the hood.";
  fetched: Date = new Date(0);
  debug: string = "";

  @transaction @monitor(appMon)
  async fetch(): Promise<void> {
    (window as any).gtag('event', 'fetch');
    await this.bp("fetch.0", 0);          let t = new Date();
    await this.bp("fetch.1", Anim.break); let r = await fetch(this.url);
    await this.bp("fetch.2", Anim.break); this.data = pretty(r.headers.get("content-type"), await r.text(), t);
    await this.bp("fetch.3", Anim.break); this.fetched = t;
    await this.bp("fetch.4", Anim.break);
    await this.bp("", 0);
  }

  @transaction
  setUrl(value: string): void {
    this.url = value;
  }

  private async bp(id: string, ms: number): Promise<void> {
    Transaction.runAs("breakpoint", SeparateFrom.Reaction | SeparateFrom.Parent, undefined, () => this.debug = id);
    await sleep(ms);
  }
}

export class Anim {
  static ticking = 1000;
  static break = Anim.ticking * 2;
  static duration = Anim.ticking / 2 / 1000;
  static blink = 0.75; // seconds
}
