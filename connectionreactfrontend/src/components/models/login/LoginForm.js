import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const style = {
    '': ''
};

const textFieldStyle = {
    'margin': '10px'
};

function LoginForm(props) {
    return (
        <div style={style}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={props.email}
                onChange={e => props.updateEmail(e.target.value)}
                style={textFieldStyle}
            /><br />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={props.password}
                onChange={e => props.updatePassword(e.target.value)}
                style={textFieldStyle}
            /><br />
            <Checkbox
                id="remember_me"
                checked={props.remember_me}
                onChange={e => props.updateRememberMe(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <label htmlFor="remember_me">Remember me for 30 Days</label>
            <div>
                <Button 
                    variant="contained"
                    onClick={() => window.location.href = '/'}
                    style={textFieldStyle}
                >
                Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={props.login}
                    style={textFieldStyle}
                >
                Login
                </Button>
            </div>
        </div>
    )
}

export default LoginForm;
