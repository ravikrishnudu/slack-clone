import React from "react";
import styles from "./Messages.module.css";

function Messages({ message, timestamp, userImage, user }) {
  console.log(userImage, timestamp);
  return (
    <div className={styles.message}>
      <img src={userImage} alt="" />
      <div className={styles.info}>
        <h4>
          {user}
          <span className={styles.timestamp}>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
