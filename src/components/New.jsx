import { AimOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import styles from "./New.module.css";

const New = ({ image, title, description }) => {
  return (
    <div className={styles.news__new}>
      <div className={styles.news__new__image}>
        <img src={image} alt="" className={styles.news__new__image__imga} />
      </div>
      <div className={styles.news__new__description}>
        <h3 className={styles.news__new__description__title}>{title}</h3>
        <div className={styles.news__new__description__info}>
          <p className={styles.news__new__description__info__text}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
