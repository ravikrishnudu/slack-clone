import React from "react";
import { useHistory } from "react-router-dom";
import db from "./Firebase";
import styles from "./SidebarOption.module.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className={styles.SidebarOption}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
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
