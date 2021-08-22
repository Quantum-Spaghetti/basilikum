import {createGlobalStyle} from "styled-components";
import defaultStyle from '../defaultTheme';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${props => props.theme.baseSize};
    font-family: ${props => props.theme.font};
  }
`;

GlobalStyle.defaultProps = defaultStyle;

export default GlobalStyle;
