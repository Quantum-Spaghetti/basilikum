import styled from 'styled-components';
import defaultTheme from "../defaultTheme";
import React from 'react';

const P = styled.p`
  font-size: ${props => props.theme.sizes.sm};
`;

P.defaultProps = defaultTheme;

export default function Paragraph({children}) {
  return (
    <P>{children}</P>
  )
}
