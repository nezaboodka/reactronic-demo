import { css } from 'emotion';
import { Anim } from '../models/App.z';

export const code = css`
  white-space: pre;
  transition: filter 0.7s ease, opacity 0.7s ease, color 0.7s ease, background-color 0.7s ease;

  strong {
    color: #ffc0c0;
    font-weight: normal;
  }
`;

export const blink1 = css`
  animation: blink1 ${Anim.blink}s ease-in 1;

  @keyframes blink1 {
    0% { background-color: transparent; }
    1% { background-color: violet; }
    100% { background-color: transparent; }
  }
`;

export const blink2 = css`
  animation: blink2 ${Anim.blink}s ease-in 1;

  @keyframes blink2 {
    0% { background-color: transparent; }
    1% { background-color: violet; }
    100% { background-color: transparent; }
  }
`;

export const normal = css`
`;

export const current = css`
  background-color: #BF80B7;
  animation: blink4 ${Anim.duration}s ease-in 1;
  text-shadow: 0.2px 0.2px 2px black;

  @keyframes blink4 {
    0% { background-color: transparent; }
    10% { background-color: transparent; }
    100% { background-color: #BF80B7; }
  }
`;
