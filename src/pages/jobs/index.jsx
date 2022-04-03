import { AimOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import Job from "../../components/Job";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import jobs from "../../data/jobs";
import styles from "./Jobs.module.css";

const Jobs = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="jobs" />
      <Navbar />
      <div className={styles.jobs__container}>
        {
          jobs.map(job => (
            <Job
              key={job.id}
              image={job.image}
              title={job.title}
              description={job.description}
              duration={job.duration}
              location={job.location}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Jobs;
