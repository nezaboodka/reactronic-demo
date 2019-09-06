import { stateful, transaction, monitor, Monitor, Transaction } from 'reactronic';
import fetch from 'node-fetch';

@stateful
export class App {
  url: string = "https://uinames.com/api/";
  data: string = "Please, press FETCH button\nto get content from the given URL\nand you will see what is going on\nunder the hood.";
  fetched: Date = new Date(0);

  @transaction @monitor(appMon)
  async fetch(): Promise<void> {
    let t = new Date();
    let r = await fetch(this.url);
    this.data = pretty(r.headers.get("content-type"), await r.text(), t);
    this.fetched = t;
  }

  @transaction
  setUrl(value: string): void {
    this.url = value;
  }
}

export const appMon = Transaction.run(() => new Monitor(true));

export function pretty(type: string | null, content: string, timestamp: Date): string {
  return type && type.indexOf("application/json") === 0 ? content.replace(/,/g, ",\n") : content;
}
