import Head from "next/head";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import LeftMenu from "../../components/Sidebar";
import Sidebar from "./components/Sidebar";
import styles from './Messages.module.css'

export default function Home() {
  return (
    <Container>
      <LeftMenu page="messages" />
      <Navbar />
      <div className={styles.messages__container}>
        <Head>
          <title>Your Chats</title>
        </Head>
        <Sidebar />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #011526;
  width: 100%;
  height: 100vh;
`;
