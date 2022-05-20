import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './models/_partials/Navbar';

function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" color="inherit" sx={{ flexGrow: 1 }}>
            { props.title }
          </Typography>
          <Button color="inherit" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
          <Button color="inherit" onClick={() => window.location.href = '/login'}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

class Home extends React.Component {
    render(){
        return (
            <div>
                <ButtonAppBar title="Ragnarok" />
                <div color="#1520A6"></div>
                <Navbar />
            </div>
        );
    }
}

export default Home;
