import React from "react";
import { auth, db } from "../../../firebase";
import styled from "styled-components";
import Sidebar from "../messages/components/Sidebar";
import ChatScreen from "../messages/components/ChatScreen";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../messages/utils/getRecipientEmail";
import Navbar from "../../components/Navbar";
import LeftMenu from "../../components/Sidebar";
import styles from "./Chat.module.css";

function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <LeftMenu page="messages" />
      <Navbar />
      <div className={styles.chat__container}>
        <Head>
          <title>Chat with {getRecipientEmail(chat.users, user)}</title>
        </Head>
        <Sidebar />
        <ChatContainer>
          <ChatScreen chat={chat} messages={messages} />
        </ChatContainer>
      </div>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);

  // Prep the Messages...
  const messagesRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  // Prep the Chats...
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  background-color: #011526;
  height: 100vh;
  `;

const ChatContainer = styled.div`
  border-radius: 20px;
  width: 65vw;
  overflow: scroll;
  height: calc(100vh - 120px);
  margin-left: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
