import {createGlobalStyle} from "styled-components";
import defaultStyle from '../defaultTheme';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${props => props.theme.baseSize};
  }
`;

GlobalStyle.defaultProps = defaultStyle;

export default GlobalStyle;
