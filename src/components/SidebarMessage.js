import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Chat from "./Chat";
import { useCollection } from "react-firebase-hooks/firestore";
import * as EmailValidator from "email-validator";

function SidebarMessage() {
  const [user] = useAuthState(auth);
  const userChatsRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot, loading] = useCollection(userChatsRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

    if (!input) return;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExist(input) &&
      input !== user.email
    ) {
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExist = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} src={user.photoURL} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" type="text" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* Components */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default SidebarMessage;

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const IconsContainer = styled.div``;
