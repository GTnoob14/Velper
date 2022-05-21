import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { MessageLeft, MessageRight } from "./Message";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "auto",
      height: "calc( 100% - 80px )",
      padding: '10px'
    }
  })
);

export default function Chat(props) {
  const classes = useStyles();
  return (
        <Paper id="style-1" className={classes.messagesBody}>
        {
          props.messages.map(message => {
            if(message.public_id !== props.friend_id){
              return (
                <MessageLeft
                  key={message.id}
                  message={message.message}
                  timestamp={message.sentAt}
                />
              );
            }else{
              return (
                <MessageRight
                  key={message.id}
                  message={message.message}
                  timestamp={message.sentAt}
                />
              );
            }
          })
        }
      </Paper>
  );
}
