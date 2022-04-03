import { UserOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import CardHome from "../../components/CardHome";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Tag from "../../components/Tag";
import learning from "../../data/learning";
import styles from "./Learning.module.css";

const Learning = () => {
  let tags = [
    {
      text: "My Rigths",
      enabled: false,
    },
    {
      text: "Matemática",
      enabled: false,
    },
    {
      text: "Programación",
      enabled: true,
    },
    {
      text: "Química",
      enabled: false,
    },
    {
      text: "Circuitos",
      enabled: false,
    },
    {
      text: "Biología",
      enabled: false,
    },
    {
      text: "Contabilidad",
      enabled: false,
    },
    {
      text: "Genética",
      enabled: false,
    },
    {
      text: "Derecho",
      enabled: false,
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar page="learning" />
      <Navbar />
      <div className={styles.learning__container}>
        <h3 className={styles["Content-title"]}>Most Popular</h3>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag text={tag.text} enabled={tag.enabled} key={index} />
          ))}
        </div>
        <div className={styles.cards}>
          {learning.map((item, index) => (
            <CardHome
              key={index}
              perfilimage={<UserOutlined />}
              title={item.title}
              followers={item.followers}
              published={item.published}
              image={item.image}
              organization={item.organization}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
