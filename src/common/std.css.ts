import { css } from 'emotion';

export const flexRow = css`
  display: flex;
  flex-direction: row;
  overflow: visible;
  align-items: center;

  * {
    flex-grow: 1;
    flex-shrink: 0;
  }
`;
