import React from "react";
import UserController from "../api/user/UserController";
import Profile from './models/Profile';
import Navbar from "./models/_partials/Navbar";

class OwnProfilePage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            usermodel: {}
        }
    }

    componentDidMount(){
        this.updateUsermodel();
    }

    updateUsermodel = async () => {
        const model = await UserController.getUser();
        this.setState({usermodel: model});
        console.log(model);
    }

    

    render(){
        return (
            <>
                <Profile usermodel={this.state.usermodel}/>
                <Navbar value={'profile'} />
            </>
        )
    }
}

export default OwnProfilePage;