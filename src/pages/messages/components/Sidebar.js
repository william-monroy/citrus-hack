import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../../firebase";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Chat from "./Chat";
import { useCollection } from "react-firebase-hooks/firestore";
import * as EmailValidator from "email-validator";
import styles from "./try.module.css";

function Sidebar() {
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
        <IconsContainer>
          <IconButton>
            <PeopleAltIcon className={styles.color} />
          </IconButton>
          <h3 className={styles.title}>Contacts</h3>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon className={styles.color} />
        <SearchInput placeholder="Search in chats" type="text" />
      </Search>

      <SidebarButton onClick={createChat} >Start a new chat</SidebarButton>

      {/* Components */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  border-radius: 30px;
  flex: 0.45;
  height: calc(100vh - 120px);
  min-width: 300px;
  max-width: 360px;
  background-color: #7c4c96;
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
  width: 75%;
  &&& {
    background-color: #b96eb1;
    border-radius: 60;
    margin-left: 45px;
    color: white;
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
  background-color: transparent;
  color: white;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #3d2948;

  background-color: #5d3f6d;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
