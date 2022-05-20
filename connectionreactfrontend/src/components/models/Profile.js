import React from "react";
import UserModel from "../../api/_models/User.datamodel";

class Profile extends React.Component{
    render(){
        let usermodel = this.props.usermodel || new UserModel();
        return (
            <div>
                <p>{usermodel.public_id}</p>
                <p>{usermodel.firstname}</p>
                <p>{usermodel.lastname}</p>
                <p>{usermodel.email}</p>
                <p>{usermodel.age}</p>
                <p>{usermodel.city}</p>
                <p>{usermodel.country}</p>
                <p>{usermodel.interests}</p>
                <p>{usermodel.friendIdList}</p>

            </div>
        );
    }
}

//props = {usermodel: UserModel}

export default Profile;