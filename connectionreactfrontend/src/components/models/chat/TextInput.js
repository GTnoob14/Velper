
import React from 'react'
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);


const TextInput = (props) => {
    const classes = useStyles();
    const [text, setText] = React.useState('');

    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Write..."
                className={classes.wrapText}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={() => props.sendMessage(text)}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}


export default TextInput;
