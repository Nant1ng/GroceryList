import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { GroceryType } from "@/types/grocery";
import { db } from "@/firebase";
import { deleteDoc, doc } from "@firebase/firestore";

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
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input``;

const Title = styled.p``;

const Amount = styled.p`
  margin: 0 0.5rem 0 0.5rem;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface IProps {
  data: GroceryType;
}

function Card({ data }: IProps) {
  const { id, amount, grocery } = data;

  const deleteCard = async (id: string | undefined) => {
    const document = doc(db, `groceryList/${id}`);
    await deleteDoc(document);
  };

  return (
    <Container>
      <Content>
        <Checkbox type="checkbox" />
        <Amount>{amount} x</Amount>
        <Title>{grocery}</Title>
      </Content>
      <DeleteButton onClick={() => deleteCard(id)}>
        <RxCross1 />
      </DeleteButton>
    </Container>
  );
}

export default Card;
