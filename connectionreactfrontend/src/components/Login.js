import { Divider } from "@mui/material";
import React from "react";
import UserController from '../api/user/UserController';
import LoginForm from "./models/login/LoginForm";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            remember_me: true
        };
    }

    updateEmail = (email) => {
        this.setState({email: email});
    }

    updatePassword = (password) => {
        this.setState({password: password});
    }

    updateRememberMe = (remember_me) => {
        this.setState({remember_me: remember_me});
    }

    login = () => {
        UserController.login(this.state.email, this.state.password, this.state.remember_me).then((res) => {
            UserController.getUser().then(r => {
                window.location.href = '/';
            }).catch(e => {
                alert("Email or Password are wrong");
            })
        }).catch(err => {
            alert("Something went wrong");
        });
    }

    render(){
        return (
            <>
                <h1>Login</h1>
                <Divider />
                <LoginForm 
                    email={this.state.email}
                    password={this.state.password}
                    remember_me={this.state.remember_me}

                    updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                    updateRememberMe={this.updateRememberMe}

                    login={this.login}
                />
            </>
        )
    }
}

export default Login;
