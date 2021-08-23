import styled from 'styled-components';
import React from 'react';

const StyledSection = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: 100%;
`;

const Section = ({
                   direction = 'column',
                   justify = 'flex-start',
                   align = 'center',
                   children,
                 }) => {
  return (
    <StyledSection
      direction={direction}
      justify={justify}
      align={align}
    >{children}</StyledSection>
  );
}

export default Section;
