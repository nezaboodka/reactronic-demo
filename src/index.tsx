import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './panels/Main';
import { App } from './models/App.z';
import { Transaction, Dbg } from 'reactronic';

Dbg.switch({
  transactions: true,
  methods: true,
  reads: false,
  writes: true,
  changes: true,
  subscriptions: true,
  outdating: true,
  gc: false,
  silent: false,
}, undefined, true);

const app = Transaction.run(() => new App());
const root = document.getElementById('root');
ReactDOM.render(<Main app={app}/>, root);

if (process.env.NODE_ENV !== 'production')
  require('./registerServiceWorker').default();
