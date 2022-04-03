import { BellFilled, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import styles from "./Navbar.module.css";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.navbar__searchbar}>
          <input className={styles.navbar__input} placeholder="Search" />
          <SearchOutlined style={{ color: "white" }} />
        </div>
      </div>
      <div className={styles.navbar__right}>
        <Button color="error">Emergency Button</Button>
        <button onClick={() => auth.signOut()} className={styles.buttonSignOut}>
          <img
            src={user.photoURL}
            alt="user image"
            className={styles.navbar__userimage}
          />
        </button>

        <p className={styles.navbar__username}>{user.displayName}</p>
        <DownOutlined
          style={{
            fontSize: "10px",
            color: "#808191",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />
        <BellFilled style={{ fontSize: "20px", color: "#808191" }} />
      </div>
    </nav>
  );
};

export default Navbar;
