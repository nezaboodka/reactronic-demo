import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './panels/Main';
import { App } from './models/App.z';
import { Transaction, Reactronic } from 'reactronic';

Reactronic.setTrace({
  silent: false,
  transactions: true,
  methods: true,
  steps: true,
  monitors: true,
  reads: false,
  writes: false,
  changes: true,
  subscriptions: false,
  invalidations: true,
  errors: true,
  warnings: true,
  gc: false,
  color: 0,
  prefix: "",
  margin1: 0,
  margin2: 0,
});

const app = Transaction.run("app", () => new App());
const root = document.getElementById('root');
ReactDOM.render(<Main app={app}/>, root);

if (process.env.NODE_ENV !== 'production')
  require('./registerServiceWorker').default();
