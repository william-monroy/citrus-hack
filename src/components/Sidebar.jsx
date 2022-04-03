import React, { useState } from "react";
import {
  HomeFilled,
  ReadFilled,
  SettingFilled,
  BulbFilled,
  CommentOutlined,
  QuestionCircleFilled,
  TeamOutlined,
  NotificationOutlined,
  CoffeeOutlined,
  ShoppingFilled,
  CalendarFilled,
} from "@ant-design/icons";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
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
      <Link href="/" replace>
        <a>
          <SidebarItem
            icon={<HomeFilled />}
            title="Home"
            color="F28888"
            active={page == "home" ? true : false}
          />
        </a>
      </Link>
      <Link href="/news" replace>
        <a>
          <SidebarItem
            icon={<NotificationOutlined />}
            title="News"
            color="9749D6"
            active={page == "news" ? true : false}
          />
        </a>
      </Link>
      <Link href="/learning" replace>
        <a>
          <SidebarItem
            icon={<BulbFilled />}
            title="Learning"
            color="5FBB6A"
            active={page == "learning" ? true : false}
          />
        </a>
      </Link>
      <Link href="/communities" replace>
        <a>
          <SidebarItem
            icon={<TeamOutlined />}
            title="Communities"
            color="DC49A3"
            active={page == "communities" ? true : false}
          />
        </a>
      </Link>
      <Link href="/jobs" replace>
        <a>
          <SidebarItem
            icon={<ShoppingFilled />}
            title="Jobs"
            color="81D0EF"
            active={page == "jobs" ? true : false}
          />
        </a>
      </Link>
      <Link href="/events" replace>
        <a>
          <SidebarItem
            icon={<CalendarFilled />}
            title="Events"
            color="f28888"
            active={page == "events" ? true : false}
          />
        </a>
      </Link>
      <Link href="/messages" replace>
        <a>
          <SidebarItem
            icon={<CommentOutlined />}
            title="Messages"
            color="F28888"
            active={page == "messages" ? true : false}
          />
        </a>
      </Link>
      <Link href="/forum" replace>
        <a>
          <SidebarItem
            icon={<CoffeeOutlined />}
            title="Forum"
            color="F28888"
            active={page == "forum" ? true : false}
          />
        </a>
      </Link>
      <Link href="/help" replace>
        <a>
          <SidebarItem
            icon={<QuestionCircleFilled />}
            title="Help"
            color="F28888"
            active={page == "help" ? true : false}
          />
        </a>
      </Link>
      <Link href="/settings" replace>
        <a>
          <SidebarItem
            icon={<SettingFilled />}
            title="Settings"
            color="F28888"
            active={page == "settings" ? true : false}
          />
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
