import { Button } from "@nextui-org/react";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="news"/>
      <Navbar />
      <div className={styles.news__container}>
        <Button>Holi</Button>
      </div>
    </div>
  );
};

export default News;
