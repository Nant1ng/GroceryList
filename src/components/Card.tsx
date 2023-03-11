import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
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
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  accent-color: #49b6ac;
`;

const Title = styled.p``;

const Amount = styled.p`
  margin: 0 0.5rem 0 0.5rem;
`;

const AddedToCart = styled.p`
  display: flex;
  text-decoration: line-through;
  text-decoration-color: #49b6ac;
  text-decoration-thickness: 2px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface IProps {
  data: GroceryType;
  toggleAddedToCart: any;
}

function Card({ data, toggleAddedToCart }: IProps) {
  const { id, amount, grocery, addedToCart } = data;

  const deleteCard = async (id: string | undefined) => {
    const document = doc(db, `groceryList/${id}`);
    await deleteDoc(document);
  };

  return (
    <Container onClick={() => toggleAddedToCart(data)}>
      {addedToCart ? (
        <>
          <Content>
            <Checkbox type="checkbox" checked={false} />
            <Amount>{amount} x</Amount>
            <Title>{grocery}</Title>
          </Content>
        </>
      ) : (
        <>
          <Content>
            <Checkbox type="checkbox" checked={true} />
            <AddedToCart>
              <Amount>{amount} x</Amount>
              <Title>{grocery}</Title>
            </AddedToCart>
          </Content>
          <IconContext.Provider value={{ color: "#49b6ac" }}>
            <DeleteButton onClick={() => deleteCard(id)}>
              <RxCross1 />
            </DeleteButton>
          </IconContext.Provider>
        </>
      )}
    </Container>
  );
}

export default Card;
