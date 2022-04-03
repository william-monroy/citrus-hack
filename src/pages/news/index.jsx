import { AimOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import New from"../../components/New";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import news from "../../data/news";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="news"/>
      <Navbar />
      <div className={styles.news__container}>
          <div style={{color:"#EFEAD7", width:"83%", marginTop:"20px"}}>
            <h2><b>News</b></h2>
          </div>
        {
          news.map(newItem => (
            <New
            key={newItem.id}
            image={newItem.image}
            title={newItem.title}
            description={newItem.description}
            />
          ))
        }
      </div>
    </div>
  );
};

export default News;
