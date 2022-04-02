import { BellFilled, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import styles from "./Navbar.module.css";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


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
        <Button color="error" >Emergency Button</Button>
        <Button auto  onClick={() => auth.signOut()} color ="transparent" >
        <img
          src={user.photoURL}
          alt="user image"
          className={styles.navbar__userimage}
        />
        </Button>
        <p className={styles.navbar__username}>{user.email}</p>
        <DownOutlined style={{ fontSize: "10px", color: "#808191", marginLeft:"10px", marginRight:"10px" }} />
        <BellFilled style={{ fontSize: "20px", color: "#808191" }} />
      </div>
    </nav>
  );
};

export default Navbar;
