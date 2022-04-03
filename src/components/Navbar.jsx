import { BellFilled, DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendMessage = async (phone, message) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone, message: message }),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  //use Google GeolocationAPI to get current location
  const getLocation = async () => {
    console.log(process.env);
    const res = await fetch(
      "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDTToLMz10ggGrT8aOjq7461lWbFijtUK4",
      {
        method: "POST",
      }
    );
    const apiResponse = await res.json();
    console.log(apiResponse);
    const lat = apiResponse.location.lat;
    const lng = apiResponse.location.lon;
    sendMessage(
      "+51935995979",
      `William needs your help, you can find near to here https://www.google.com/maps/search/${lat},${lng}/`
    );
  };

  const handleEmergency = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     const lat = position.coords.latitude;
    //     const lng = position.coords.longitude;
    //     console.log(lat, lng);
    //     sendMessage();
    //   });
    // } else {
    //   console.log("Geolocation is not supported by this browser.");
    // }
    getLocation();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.navbar__searchbar}>
          <input className={styles.navbar__input} placeholder="Search" />
          <SearchOutlined style={{ color: "white" }} />
        </div>
      </div>
      <div className={styles.navbar__right}>
        <Button color="error" onClick={handleEmergency}>
          Emergency Button
        </Button>
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
