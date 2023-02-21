import Card from "@/components/Card";
import Head from "next/head";
import styled from "styled-components";
import { HiPencilSquare } from "react-icons/hi2";

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

const Row = styled.div`
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
  return (
    <>
      <Head>
        <title>Grocery List App</title>
        <meta name="description" content="Grocery List App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/groceryListIcon.png" />
      </Head>
      <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#3caea4]">
        <Container>
          <Title>Grocery List</Title>
          <Row>
            <GroceryTitle type="text" placeholder="Add Grocery" />
            <Amount type="number" />
            <Add>
              <HiPencilSquare size={30} />
            </Add>
          </Row>
          <Cards>
            <Card />
            <Card />
          </Cards>
        </Container>
      </div>
    </>
  );
}
