import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Signup from './SignUp';
import UserController from '../api/user/UserController';

function UpdateOwnProfilePage() {

    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate('/profile')}
          >
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Update your Profile
          </Typography>
        </Toolbar>
      </AppBar>
        <Signup
            submitFunc={(model) => {
                UserController.updateUser(model).then(res => {
                    alert("Profile was updated!");
                    navigate('/profile');
                }).catch(err => {
                    alert("Something went wrong...");
                })
            }}
        />
    </Box>
  )
}

export default UpdateOwnProfilePage;
