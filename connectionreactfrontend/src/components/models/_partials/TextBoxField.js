import React, { Component } from 'react'
import { Paper, Typography } from '@mui/material';


class TextBoxField extends Component {

    render() {

        return (
            <Paper style={{
                margin: "40px",
                padding: "20px",
                flex: '0 0 30%',
              }}
              elevation={10}
            >
              <Typography style={{fontWeight: 'bold'}}>
                { this.props.text}
              </Typography>
            </Paper>
        )
    }
}

export default TextBoxField;
