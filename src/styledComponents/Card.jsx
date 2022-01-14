import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  display: flex;
  width: 100px;
  height: 150px;
  padding: 5px;
  border: 3px solid ${({ theme }) => theme.cardBorder};
  border-radius: 15px;
  font-size: 0.9em;
  color: ${({ theme }) => theme.cardColor};
  background-color: ${({ theme }) => theme.cardBack};
`;

const Content = styled.div`
  align-self: center;
`;

const Card = () => (
  <Container>
    <Content>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Content>
  </Container>
);

export { Card };
