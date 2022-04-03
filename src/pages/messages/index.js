import Head from "next/head";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Your Chats</title>
      </Head>
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  background-color: #011526;
`;
