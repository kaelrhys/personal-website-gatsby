
import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';
import { normalize } from 'styled-normalize';
import bgImage from "../images/bg-pattern.gif";
import { up } from 'styled-breakpoints';


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
    font-family: ${props => props.theme.textStyles.body.fontFamily};
    line-height: ${props => props.theme.textStyles.body.lineHeight};
    font-size: ${props => props.theme.textStyles.body.fontSize}px;
    color: ${props => props.theme.colors.navy};
    letter-spacing: ${props => props.theme.textStyles.body.letterSpacing}px;
    background-image: url(${bgImage});
    background-attachment: fixed;
    background-size: 140%;

    ${up('tablet')} {
      background-size: 120%;
    }

    ${up('desktop')} {
      background-size: 80%;
    }

  }
  a {
    color: ${props => props.theme.colors.blue};
  }

  h1, h2, h3 {
    font-family: ${props => props.theme.fonts.headings};
    text-transform: Uppercase;
    font-weight: 800;
    margin: 0;
  }

`;