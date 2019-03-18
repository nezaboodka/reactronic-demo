import { css } from 'emotion';

export const demo = css`
  overflow: hidden;
  color: #14344f;
  background-color: white;
  box-shadow: 0.1em 0.1em 1em 0px rgba(0, 0, 0, 1);
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto 1fr;
  padding: 1em;

  input {
    grid-row: 1;
    grid-column: 1;
    font-size: 75%;
    box-sizing: border-box;
    padding: 0.1em 8px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;
    flex-shrink: 1;
    min-width: 0;
  }

  button {
    grid-row: 1;
    grid-column: 3;
    font-size: inherit;
    flex-grow: 0;
    padding: 0.1em 0.5em;
    background-color: #BF80B7;
    color: white;
    text-shadow: none;
    transition: color 0.7s ease, background-color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease, box-shadow 0.7s ease;
    border: none;
    min-width: 1em;
    text-align: center;
    white-space: nowrap;
  }

  button:disabled {
    color: rgba(255, 255, 255, 0.5);
    background-color: silver;
    box-shadow: none;
  }

  button:hover {
    cursor: pointer;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  img {
    animation: rotation 2s infinite linear;
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    width: 2em;
    height: 2em;
    margin: 0;
    padding: 0;
    transition: opacity 0.7s ease;
    z-index: 1000;
    opacity: 0.4;
  }

  .rotating {
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  code,
  pre,
  .pre {
    grid-row: 2;
    grid-column: 1 / span 3;
    position: relative;
    font-size: 75%;
    max-width: 100%;
    min-height: 6em;
    padding: 0.1em 8px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background-color: white !important;
    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;
    box-shadow: none !important;
    color: black !important;
    text-shadow: none !important;
    margin-top: 0.5em !important;
  }
`;

export const body = css`
  padding: 1em;
`;

export const footer = css`
  text-align: center;
  font-size: smaller;
  color: silver;
`;

export const timestamp = css`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: smaller;
`;
