import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Chat.module.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Chat() {
  const { roomId } = useParams;
  return (
    <div className={styles.chat}>
      <h1>chat {roomId} room </h1>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h4 className={styles.channelName}>
            <strong># general</strong>
            <StarBorderIcon /> 
          </h4>
        </div>{" "}
        <div className={styles.headerRight}></div>
      </div>
    </div>
  );
}

export default Chat;
