import { Button } from "@nextui-org/react";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./Events.module.css";
import 'antd/dist/antd.css';
import { Calendar, Badge } from "antd";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const Events = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="events" />
      <Navbar />
      <div className={styles.events__container}>
        <div style={{width:'100%'}}>
          <h2 style={{ color: 'white', margin: '0', marginTop:'10px'}}>Upcoming Events</h2>
        </div>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          style={{ backgroundColor: "transparent", background: "transparent" }}
        />
      </div>
    </div>
  );
};

export default Events;
