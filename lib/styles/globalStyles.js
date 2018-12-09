import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
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
