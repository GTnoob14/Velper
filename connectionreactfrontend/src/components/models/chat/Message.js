import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { deepOrange } from "@mui/material/colors";
import { Paper } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageRow: {
      display: "flex",
      justifyContent: "flex-start"
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      color: "white",
      backgroundColor: "#1520A6",//"#A8DDFD",
      maxWidth: "60%",
      minWidth: "20%",
      wordBreak: "break-word",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #051076",//#97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #1520A6", //#A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #1520A6", //#97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "white", //"#f8e896",
      maxWidth: "60%",
      minWidth: "20%",
      wordBreak: "break-word",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid grey", //#dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid white", //#f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid grey", //#dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },

    messageContent: {
      padding: 0,
      margin: "0 0 5px 0"
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      bottom: "0px",
      right: "6px",
      //paddingTop: "100px",
    },

    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    displayName: {
      marginLeft: "20px"
    }
  })
);

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "Empty message was delivered";
  const timestamp = props.timestamp ? props.timestamp.split('T')[1].substring(0, 5) : "";
  const classes = useStyles();
  return (
    <div className={classes.messageRow}>
      <Paper className={classes.messageBlue} elevation={2}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </Paper>
    </div>
  );
};

export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "Empty message was delivered";
  const timestamp = props.timestamp ? props.timestamp.split('T')[1].substring(0, 5) : "";
  return (
    <div className={classes.messageRowRight}>
      <Paper className={classes.messageOrange} elevation={2}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </Paper>
    </div>
  );
};


//TODO props(message: MessageModel, onEdit: Function, onDelete: Function)

