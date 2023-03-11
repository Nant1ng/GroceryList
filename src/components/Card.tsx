import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { RxCross1 } from "react-icons/rx";
import { MdModeEdit, MdOutlineDone } from "react-icons/md";
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

const EditButton = styled.button``;

const NewGroceryTitle = styled.input`
  padding: 0.5rem;
  width: 100%;
  min-width: 15rem;
  max-width: 30rem;
`;

const NewAmount = styled.input`
  padding: 0.5rem;
  width: 2.5rem;
  margin: 0 0.3rem 0 0.5rem;
`;

const DeleteButton = styled.button``;

interface IProps {
  data: GroceryType;
  toggleAddedToCart: any;
}

function Card({ data, toggleAddedToCart }: IProps) {
  const { id, amount, grocery, addedToCart } = data;
  const [editCard, setEditCard] = useState(false);

  const deleteCard = async (id: string | undefined) => {
    const document = doc(db, `groceryList/${id}`);
    await deleteDoc(document);
  };

  return (
    <Container>
      {addedToCart ? (
        <>
          <Content onClick={() => toggleAddedToCart(data)}>
            <Checkbox type="checkbox" checked={true} />
            <AddedToCart>
              <Amount>{amount} x</Amount>
              <Title>{grocery}</Title>
            </AddedToCart>
          </Content>
          <IconContext.Provider value={{ color: "#49b6ac", size: "20px" }}>
            <DeleteButton onClick={() => deleteCard(id)}>
              <RxCross1 />
            </DeleteButton>
          </IconContext.Provider>
        </>
      ) : (
        <>
          {editCard ? (
            <>
              <NewGroceryTitle type="text" placeholder="New Grocery Title" />
              <NewAmount type="number" min="1" />
              <EditButton onClick={() => setEditCard(!editCard)}>
                <IconContext.Provider
                  value={{ color: "#49b6ac", size: "20px" }}
                >
                  <MdOutlineDone />
                </IconContext.Provider>
              </EditButton>
            </>
          ) : (
            <>
              <Content>
                <Checkbox type="checkbox" checked={false} />
                <Amount>{amount} x</Amount>
                <Title>{grocery}</Title>
              </Content>
              <EditButton onClick={() => setEditCard(!editCard)}>
                <IconContext.Provider
                  value={{ color: "#49b6ac", size: "20px" }}
                >
                  <MdModeEdit />
                </IconContext.Provider>
              </EditButton>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default Card;
