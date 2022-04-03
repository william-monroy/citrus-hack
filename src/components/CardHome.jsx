import React from "react";
import { Avatar } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import styles from "./CardHome.module.css";

const CardHome = (props) => {
  return (
    <div className={styles.CardHome}>
      <div
        className={styles["card-top"]}
        style={{ backgroundImage: `"url(" + ${props.image} + ")"` }}
      >
        <div className={styles.duracion}>
          <p className={styles["duracion-text"]}>{props.duration}</p>
        </div>
      </div>
      <div className={styles.instructor}>
        {/* <Avatar className="avatar" size={50} icon={<UserOutlined />} /> */}
        <Avatar className={styles.avatar} size={50} icon={props.perfilimage} />
        <div className={styles.verificado}>
          <CheckOutlined style={{ Color: "#f9f9f9", fontSize: "10px" }} />
        </div>
      </div>
      <div className={styles["card-bottom"]}>
        <p className={styles["card-instructor"]}>{props.organization}</p>
        <p className={styles["card-title"]}>{props.title}</p>
        <p className={styles.visitas}>{props.followers}  •  {props.published}</p>
      </div>
    </div>
  );
};

export default CardHome;
