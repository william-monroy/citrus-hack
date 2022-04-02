import React from "react";
import { auth, provider } from "../../firebase";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Head from "next/head";

function login() {
  const useStyle = makeStyles((theme) => ({
    RoundedButton: {
      borderRadius: 10,
      background: "#f28888",
      color: "white",
      height: 40,
      fontFamily: "monospace",
    },
  }));
  const signIn = () => {
    auth.signInWithPopup(provider).catch(console.error);
  };
const classes = useStyle();


  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://i.ibb.co/vqFCHPL/loginscreen.png" alt="" />
        <Button
          variant="outlined"
          onClick={signIn}
          className={classes.RoundedButton}
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #861657;
  background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(1, 21, 38);
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.75);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
