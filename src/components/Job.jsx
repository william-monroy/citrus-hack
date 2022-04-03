import { AimOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import styles from "./Job.module.css";

const Job = ({image, title, description, duration, location}) => {
  return (
    <div className={styles.jobs__job}>
      <div className={styles.jobs__job__image}>
        <img
          src={image}
          alt=""
          className={styles.jobs__job__image__imga}
        />
      </div>
      <div className={styles.jobs__job__description}>
        <h3 className={styles.jobs__job__description__title}>
          {title}
        </h3>
        <div className={styles.jobs__job__description__subtitle}>
          <div className={styles.jobs__job__description__subtitle__duration}>
            <ClockCircleOutlined style={{ color: "#EFEAD7" }} />
            <p className={styles.duration}>{duration}</p>
          </div>
          <div className={styles.jobs__job__description__subtitle__location}>
            <AimOutlined style={{ color: "#EFEAD7" }} />
            <p className={styles.location}>{location}</p>
          </div>
          <Button>Apply</Button>
        </div>
        <div className={styles.jobs__job__description__info}>
          <p className={styles.jobs__job__description__info__text}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
