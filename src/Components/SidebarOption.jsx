import React from "react";
import styles from "./SidebarOption.module.css";

function SidebarOption({ Icon, title }) {
  return (
    <div className={styles.SidebarOption}>
      {Icon && <Icon className={styles.icon} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className={styles.channel}>
          <span className={styles.hash}># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
