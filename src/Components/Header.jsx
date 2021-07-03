import React from "react";
import styles from "./Header.module.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Avatar
          className={styles.avatar}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="welcome to slack clone " />
        <SearchIcon />
      </div>
      <div className={styles.headerRight}>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
