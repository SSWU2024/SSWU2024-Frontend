import { css, Global } from '@emotion/react';
import { ReactElement } from 'react';

import { reset } from './reset';

const globalCss = css`
  ${reset}

  #root,
  body,
  html {
    margin: 0 auto;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    scroll-behavior: smooth;

    user-select: none;

    display: flex;
    justify-content: center;
  }

  body {
    background-color: white;
    font-family: 'Pretendard Variable', Pretendard, sans-serif;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
  }

  input,
  button {
    padding: 0;
    margin: 0;

    background-color: transparent;
    outline: none;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }
`;
export function GlobalStyles(): ReactElement {
  return <Global styles={[globalCss]} />;
}
