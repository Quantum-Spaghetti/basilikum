import {createGlobalStyle} from "styled-components";
import defaultStyle from '../defaultTheme';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-size: ${props => props.theme.baseSize};
    font-family: ${props => props.theme.font};
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

GlobalStyle.defaultProps = defaultStyle;

export default GlobalStyle;
