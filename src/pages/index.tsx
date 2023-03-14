import { useState, useEffect } from "react";
import Head from "next/head";
import { GroceryType } from "@/types/grocery";
import styled from "styled-components";

import {
  addDoc,
  collection,
  doc,
  DocumentData,
  onSnapshot,
  query,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

import { HiPencilSquare } from "react-icons/hi2";
import Card from "@/components/Card";

const Container = styled.div`
  background-color: #f2f2f2;
  max-width: 31.25rem;
  padding: 1rem;
  margin: auto;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0.25rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

const FormRow = styled.form`
  display: flex;
  flex-direction: row;
`;

const GroceryTitle = styled.input`
  padding: 0.5rem;
  width: 100%;
  min-width: 15rem;
  max-width: 30rem;
`;

const Amount = styled.input`
  padding: 0.5rem;
  width: 2.5rem;
  margin: 0 0.3rem 0 0.5rem;
`;

const Cards = styled.ul``;

const Add = styled.button``;

export default function Home() {
  const [grocerys, setGrocerys] = useState<GroceryType[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(1);

  const addGrocery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") {
      alert("Please enter a vaild title");
      return;
    }
    await addDoc(collection(db, "groceryList"), {
      title: title,
      amount: amount,
      addedToCart: false,
    });
    setTitle("");
    setAmount(1);
  };

  useEffect(() => {
    onSnapshot(
      collection(db, "groceryList"),
      (snapshot: QuerySnapshot<DocumentData>) => {
        setGrocerys(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    );
  }, []);

  const toggleAddedToCart = async (data: {
    id: string;
    addedToCart: boolean;
  }) => {
    await updateDoc(doc(db, "groceryList", data.id), {
      addedToCart: !data.addedToCart,
    });
  };


  return (
    <>
      <Head>
        <title>Grocery List App</title>
        <meta name="description" content="Grocery List App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/groceryListIcon.png" />
      </Head>
      <div className="h-screen w-screen p-4 bg-gradient-to-tl from-[#3caea4]">
        <Container>
          <Title>Grocery List</Title>
          <FormRow onSubmit={addGrocery}>
            <GroceryTitle
              type="text"
              placeholder="Add Grocery Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Amount
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
            <Add>
              <HiPencilSquare size={30} />
            </Add>
          </FormRow>
          <Cards>
            {grocerys && grocerys.length ? (
              <>
                {grocerys?.map((data) => (
                  <Card
                    key={data.id}
                    data={data}
                    toggleAddedToCart={toggleAddedToCart}
                  />
                ))}
              </>
            ) : null}
          </Cards>
        </Container>
      </div>
    </>
  );
}
