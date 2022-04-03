import React from "react";
import styles from "./Tag.module.css";

const Tag = (props) => {
  const tagStyleDisable = {
    fontSize: "14px",
    margin: "0",
    padding: "0",
    color: "#808191",
  };

  const tagStyleEnable = {
    fontSize: "14px",
    margin: "0",
    padding: "0",
    color: "#f9f9f9",
    fontWeight: "500",
  };

  return (
    <div
      className={styles.Tag}
      style={{ backgroundColor: `${props.enabled ? "#6B5ECD" : "#353340"}` }}
    >
      {props.enabled ? (
        <p style={tagStyleEnable}>{props.text}</p>
      ) : (
        <p style={tagStyleDisable}>{props.text}</p>
      )}
    </div>
  );
};

export default Tag;
