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
          <div style={{color:"#EFEAD7", width:"83%", marginTop:"20px"}}>
            <h2><b>Jobs</b></h2>
          </div>
        {
          jobs.map((job,index) => (
            <Job
              key={index}
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
