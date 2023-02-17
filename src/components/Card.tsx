import React from "react";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #e2e8f0;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Checkbox = styled.input``;

const Title = styled.p`
  margin-left: 0.5rem;
`;

function Card() {
  return (
    <Container>
      <Content>
        <Checkbox type="checkbox" />
        <Title>Nocco</Title>
      </Content>
      <p>Icon</p>
    </Container>
  );
}

export default Card;
