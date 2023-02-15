import Head from "next/head";
import styled from "styled-components";

/* Kolla box-shadow färg senare  */
const Container = styled.div`
  background-color: #f2f2f2;
  max-width: 31.25rem;
  padding: 0.25rem;
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
        </Container>
      </div>
    </>
  );
}
