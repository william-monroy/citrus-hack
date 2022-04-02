import React, { useState } from "react";
import styles from "./SidebarItem.module.css";

const SidebarItem = ({ icon, title, active = false, color }) => {
  const [over, setOver] = useState(false);

  const iconStyle = {
    height: "32px",
    width: "32px",
    borderRadius: "10px",
    backgroundColor: `${active ? `#${color}` : "#012340"}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  };

  const titleStyle = {
    color: `${active ? "#ffffff" : "#808191"}`,
    fontSize: "16px",
    fontWeight: `${active ? "600" : "500"}`,
    marginLeft: "10px",
    "&:hover": {
      color: "#ffffff",
    },
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  };

  const iconStyleHover = {
    height: "32px",
    width: "32px",
    borderRadius: "10px",
    backgroundColor: `'#${color}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  };

  const titleStyleHover = {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    marginLeft: "10px",
    "&:hover": {
      color: "#ffffff",
    },
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  };

  return (
    <div
      className={styles.sidebar__item}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <div
        style={over ? iconStyleHover : iconStyle}
        className={styles.icon}
      >
        <div
          style={{
            fontSize: "16px",
            color: `${active || over ? "#ffffff" : "#808191"}`,
          }}
        >
          {icon}
        </div>
      </div>
      <p style={over ? titleStyleHover : titleStyle} className={styles.title}>
        {title}
      </p>
    </div>
  );
};

export default SidebarItem;
