import { TextField } from '@mui/material';
import React, { Component } from 'react'

const textFieldStyle = {
    'margin': '10px'
}

class ConfirmationProcess extends Component {

  render() {
    return (
      <div>
          <TextField
            label="Verification Code"
            variant="filled"
            type="code"
            required
            value={this.props.verificationCode}
            onChange={e => this.props.updateVerficationCode(e.target.value)}
            style={textFieldStyle}
        /><br />
      </div>
    )
  }
}

export default ConfirmationProcess;
