import styled from 'styled-components';
import defaultTheme from "../defaultTheme";
import React from 'react';

const Display = styled.h3`
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.sizes.lg};
  margin: 0 0 16px;`;

Display.defaultProps = defaultTheme;

export default function Display3({children}) {
  return (
    <Display>{children}</Display>
  )
}
