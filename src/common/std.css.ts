// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2017-2019 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic/master/LICENSE

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
