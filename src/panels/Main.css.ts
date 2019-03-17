import { css } from 'emotion';
import { Anim } from '../models/App.z';

export const app = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: auto;
  font-family: Calibri, Tahoma, Arial, monospace;
  font-size: calc(16px + (24 - 16) * (100vw - 640px) / (1920 - 640));
  font-weight: 300;
  display: grid;

  a {
    text-decoration: underline;
    outline: none;
    color: inherit;
  }

  h1 {
    font-size: 175%;
    margin-bottom: 0.5em;
    position: relative;
    font-weight: normal;
    padding-left: 1.5ch;
    border-left: .2ch solid #00B3FF;

    img {
      position: relative !important;
      height: 1.1em !important;
      width: auto !important;
      vertical-align: bottom !important;
      margin-right: 0.5em !important;
    }
  }

  h2 {
    margin-top: 1em;
    color: #5DF586;
  }

  code,
  pre,
  .pre {
    font-size: 75%;
    box-sizing: border-box;
    max-width: 100%;
    font-family: monospace;
    margin: 0;
    padding: 0.5em 0.5em;
    text-align: left;
    overflow: auto;
    white-space: pre;
    background-color: #122f47;
    color: #fff;
    text-shadow: 0 0 1px black;
    box-shadow: 0.01em 0.01em 0.2em 0px rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 1025px) { /* mobile */
      font-size: 100%;
    }
  }
`;

export const body = css`
  display: grid;
  grid-template-columns: 55% 10% 35%;
  grid-template-rows: auto auto auto 0 1fr;
  padding: 1em 1em;
  margin: 0 auto;
  min-width: 75ch;
  max-width: 85ch;

  @media only screen and (max-width: 1025px) { /* mobile */
    min-width: unset;
    max-width: 100vw;
  }

  code,
  pre,
  .pre {
    background-color: #122f47;
    color: #fff;
    text-shadow: 0 0 1px black;
    box-shadow: 0.02em 0.02em 0.5em 0px rgba(0, 0, 0, 0.5);
    max-width: 100%;
    overflow: auto;
    /* border: 1px solid rgba(255, 255, 255, 0.4); */
  }

  p {
    margin-bottom: 0.5em;
  }

  a {
    color: #5DF586;
    font-weight: normal;
  }
`;

export const summary = css`
  grid-row: 1;
  grid-column: 1 / span 3;
  margin-bottom: 1.5em;
`;

export const modelCode = css`
  grid-row: 2 / span 2;
  grid-column: 1;
  z-index: 100;
`;

export const renderCode = css`
  grid-row: 4 / span 2;
  grid-column: 1;
  margin-top: 1em;
`;

export const demo = css`
  grid-row: 2;
  grid-column: 2 / span 2;
  margin-left: 1em;
`;

export const state = css`
  grid-row: 3 / span 3;
  grid-column: 2 / span 2;
  margin-left: 1em;
  margin-top: 1em;
  position: relative;
`;

export const ribbon = css`
  position: fixed;
  top: 1.25em;
  right: -6.5em;
  background-color: white;
  color: black !important;
  padding: .25em 7em;
  transform: rotate(45deg);
  text-decoration: none !important;
`;

export const code = css`
  white-space: pre;

  .blink {
  	animation: blink2 ${Anim.duration}s ease 1;
  }

  @keyframes blink2 {
    0% { background-color: unset; }
    10% { background-color: violet; }
    100% { background-color: unset; }
  }
`;
