import normalize from './normalize'
import {css} from '@emotion/core'

export const GlobalStyles = css`
  ${normalize};
  html {
  font-size: 18px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
`
