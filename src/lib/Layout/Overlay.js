import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  /*Turn into flex*/
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  position: relative;
  width: 100%;
  height: ${props => props.height};
  object-fit: cover;
`;

const Background = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
`;

const ChildContainer = styled.div`
`;


export default function Overlay({
                                  justify,
                                  align,
                                  background,
                                  height,
                                  children
                                }) {
  return (
    <Container justify={justify} align={align} height={height}>
      <Background background={background}/>
      <ChildContainer>
        {children}
      </ChildContainer>
    </Container>
  );
}
