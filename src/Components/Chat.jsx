import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Chat.module.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import InfoIcon from "@material-ui/icons/Info";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import db from "./Firebase";
import Message from "./Messages";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log(" messaages", roomMessages);

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h4 className={styles.channelName}>
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon className={styles.borderIcon} />
          </h4>
        </div>
        <div className={styles.headerRight}>
          <p>
            <ErrorOutlineIcon className={styles.infoIcon} /> Details
          </p>
        </div>
      </div>
      <div className={styles.messages}>
        {roomMessages.map(({ message, timestamp, userImage, user }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      {/* <ChatInput channelName={roomDetails?.name} channelId={roomId} /> */}

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
