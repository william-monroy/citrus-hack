import { Avatar } from "@material-ui/core";
import Router from "next/router";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../../../../firebase";
import getDisplayName from "../utils/getDisplayName";
import getRecipientEmail from "../utils/getRecipientEmail";

function Chat({ id, users }) {
  // const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const enterChat = () => {
    Router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);
  const displayName = getDisplayName(users, user);
  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <Email>{recipient?.name}</Email>
    </Container>
  );
}

export default Chat;
const Email = styled.div`
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: all 0.2s ease-in-out;
  margin: 5px;

  :hover {
    background-color: #5d3f6d;
    border-radius: 20px;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
