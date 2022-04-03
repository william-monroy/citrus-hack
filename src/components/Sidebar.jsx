import React, { useState } from "react";
import { HomeFilled, ReadFilled, SettingFilled, BulbFilled,CommentOutlined,QuestionCircleFilled,TeamOutlined, NotificationOutlined,CoffeeOutlined, ShoppingFilled, CalendarFilled  } from "@ant-design/icons";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
// import a from "next/a";

const Sidebar = ({ page }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <img
          src="https://i.postimg.cc/MG1dCW3P/logo-prov.png"
          alt="Logo"
          height="45px"
          className={styles.sidebar__logo}
        />
        <h2 className={styles.sidebar__title}>CitrusHack</h2>
      </div>
      <h3 className={styles.sidebar__subtitle}>MENU</h3>
      <a href="/" passHref>
        <SidebarItem
          icon={<HomeFilled />}
          title="Home"
          color="F28888"
          active={page == "home" ? true : false}
        />
      </a>
      <a href="/news" passHref>
        <SidebarItem
          icon={<NotificationOutlined />}
          title="News"
          color="9749D6"
          active={page == "news" ? true : false}
        />
      </a>
      <a href="/learning" passHref>
        <SidebarItem
          icon={<BulbFilled />}
          title="Learning"
          color="5FBB6A"
          active={page == "learning" ? true : false}
        />
      </a>
      <a href="/communities" passHref>
        <SidebarItem
          icon={<TeamOutlined />}
          title="Communities"
          color="DC49A3"
          active={page == "communities" ? true : false}
        />
      </a>
      <a href="/jobs" passHref>
        <SidebarItem
          icon={<ShoppingFilled />}
          title="Jobs"
          color="81D0EF"
          active={page == "jobs" ? true : false}
        />
      </a>
      <a href="/events" passHref>
        <SidebarItem
          icon={<CalendarFilled />}
          title="Events"
          color="f28888"
          active={page == "events" ? true : false}
        />
      </a>
      <a href="/messages" passHref>
        <SidebarItem
          icon={<CommentOutlined />}
          title="Messages"
          color="F28888"
          active={page == "messages" ? true : false}
        />
      </a>
      <a href="/forum" passHref>
        <SidebarItem
          icon={<CoffeeOutlined />}
          title="Forum"
          color="F28888"
          active={page == "forum" ? true : false}
        />
      </a>
      <a href="/help" passHref>
        <SidebarItem
          icon={<QuestionCircleFilled />}
          title="Help"
          color="F28888"
          active={page == "help" ? true : false}
        />
      </a>
      <a href="/settings" passHref>
        <SidebarItem
          icon={<SettingFilled />}
          title="Settings"
          color="F28888"
          active={page == "settings" ? true : false}
        />
      </a>
    </div>
  );
};

export default Sidebar;
