import { Chip } from "@mui/material";
import React from "react";
import UserModel from "../../api/_models/User.datamodel";

class Profile extends React.Component{
    render(){
        let usermodel = this.props.usermodel || new UserModel();
        console.log(usermodel.interests);
        return (
            <div>
                <p>{usermodel.public_id}</p>
                <p>{usermodel.firstname}</p>
                <p>{usermodel.lastname}</p>
                <p>{usermodel.email}</p>
                <p>{usermodel.age}</p>
                <p>{usermodel.city}</p>
                <p>{usermodel.country}</p>
                <p>{this.props.usermodel.interests?.map(i => (<Chip key={i.id} style={{margin: '5px'}} label={i.interest} />))}</p>
                <p>{usermodel.friendIdList}</p>

            </div>
        );
    }
}

//props = {usermodel: UserModel}

export default Profile;