import { SendOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/react";
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="messages" />
      <Navbar />
      <div className={styles.messages__container}>
        <div className={styles.messages__conversation}>
          {/* Header */}
          <div className={styles.messages__header}>
            {/* Header Avatar */}
            <div className={styles.messages__header__avatar}>
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="user image"
                className={styles.messages__header__avatar__image}
              />
            </div>
            <div className={styles.messages__header__info}>
              <div className={styles.messages__header__info__name}>
                <p className={styles.messages__header__username}>John Doe</p>
                <p className={styles.messages__header__time}>Online</p>
              </div>
            </div>
          </div>
          {/* ChatScreen */}
          <div className={styles.messages__body}>
            <div className={styles.messages__body__message}>
              <p className={styles.messages__body__message__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className={styles.messages__body__message__time}>12:00 PM</p>
            </div>
          </div>
          <div className={styles.messages__input}>
            <input
              type="text"
              placeholder="Type a message..."
              className={styles.messages__input__text}
            />
            <Button auto color="primary" icon={<SendOutlined />} />
          </div>
        </div>
        <div className={styles.messages__contacts}>
          <p className={styles.messages__contacts__title}>Contacts</p>
          <div className={styles.messages__contacts__contact}>
            <div className={styles.messages__contacts__contact__avatar}>
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="user image"
                className={styles.messages__contacts__contact__avatar__image}
              />
            </div>
            <div className={styles.messages__contacts__contact__info}>Suyeon Cho</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
