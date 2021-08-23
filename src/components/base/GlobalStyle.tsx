import { Global, css } from '@emotion/react';
import React from 'react';

import { BREAKPOINT_MEDIUM } from 'constants/breakpoints';
import { ColorPalette } from 'utils/ColorUtils';

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-size: 16px;
        height: 100%;
        overscroll-behavior: none;

        @media screen and (max-width: ${BREAKPOINT_MEDIUM}) {
          font-size: 14px;
        }
      }

      body {
        background: #f8f9fa;
        min-height: 100%;
        color: ${ColorPalette.BLACK};
        line-height: 1.3;
        word-break: keep-all;
        overflow-x: hidden;

        margin: 0;
        padding: 0;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
          'Noto Sans KR', 'Malgun Gothic', sans-serif;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        scrollbar-width: none;
      }

      textarea,
      button,
      button:active,
      input {
        resize: none;
        outline: none;
        border: none;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
          Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
          'Noto Sans KR', 'Malgun Gothic', sans-serif;
      }

      a,
      a:visited {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
      }

      input,
      textarea {
        border: none;

        :focus {
          outline: none;
        }
      }

      * {
        box-sizing: border-box;
        margin: 0;

        ::selection {
          background: ${ColorPalette.BRAND_MAIN};
          color: #f1f3f5;
        }
      }

      #root {
        overflow-y: auto;
      }
    `}
  />
);

export default GlobalStyle;
