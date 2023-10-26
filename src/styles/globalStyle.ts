import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    line-height: normal;
    font-size: 0.9rem;
    box-sizing: border-box;
    color: #4a4a4a;
  }
  html {
    --color-main: #5e85e8;
    --color-black: #4a4a4a;
    --color-blue: #f8f9fb;
    --color-gray: #ececec;
    --color-white: #fff;
  }
  body {
    background-color: #f0f2f7;
    padding: 3.75rem 0rem 3.75rem 0rem;
    display: block;
  }
`;
