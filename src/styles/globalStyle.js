
import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';
import theme from './theme';
import { normalize } from 'styled-normalize';
const { colors, fontSizes, fonts } = theme;


export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700');
  @font-face {
    font-family: 'Blackout';
    src: url(${fontFamilies.BlackoutWOFF2}) format('woff2'),
         url(${fontFamilies.BlackoutWOFF}) format('woff');
         url(${fontFamilies.BlackoutTTF}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  body {
    font-family: ${fonts.body};
    color: ${colors.navy};
  }

  a {
    color: ${colors.blue};
  }

  h1, h2, h3 {
    font-family: ${fonts.headings};
    text-transform: Uppercase;
    font-weight: 800;
    margin: 0;
  }

`;