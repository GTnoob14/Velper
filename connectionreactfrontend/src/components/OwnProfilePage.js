import React from "react";
import UserController from "../api/user/UserController";
import Navbar from "./models/_partials/Navbar";
import ProfileCard from "./models/ProfileCard";
import { useNavigate } from 'react-router-dom';
import { Divider, IconButton, Toolbar, Typography } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import { Box } from "@mui/system";

//Wrapper for _OwnProfilePage to guarantee usage of navigate
function OwnProfilePage (props){
    const navigate = useNavigate();
    // eslint-disable-next-line
    return ( <_OwnProfilePage navigate={navigate} /> );
}

class _OwnProfilePage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            usermodel: undefined,

            open: false
        }
    }

    componentDidMount(){
        this.updateUsermodel().then((model) => {
            this.setState({usermodel: model});
        });
    }
    updateUsermodel = async () => {
        return await UserController.getUser();
    } 

    render(){
        const model = this.state.usermodel;

        return (
            <>
                {model === undefined ? (
                    <>
                        <h1>Profile is loading</h1>
                        <Navbar value={'profile'} />
                    </>
                ) : (
                    <>
                        <Box sx={{ flexGrow: 1 }}>
                            <Toolbar>
                                <h1 style={{ flexGrow: 1 }}>Your Profile</h1>
                                    <IconButton edge="end" onClick={() => {
                                        UserController.logout().then(() => {
                                            window.location.reload();
                                        });
                                    }}>
                                        <Logout />
                                    </IconButton>
                            </Toolbar>
                        </Box>
                        <Divider />
                        <div align="center" style={{margin: "20px"}}>
                            <ProfileCard
                                public_id={model.public_id}
                                firstname={model.firstname}
                                lastname={model.lastname}
                                age={model.age}
                                email={model.email}
                                country={model.country}
                                state={model.state}
                                city={model.city}
                                biography={model.biography}
                                interests={model.interests}

                                friend={false}

                                updateUser={() => this.props.navigate('/profile/update')}
                            />
                        </div>
                        <Navbar value={'profile'} />
                    </>
                )}
            </>
        )
    }
}

export default OwnProfilePage;