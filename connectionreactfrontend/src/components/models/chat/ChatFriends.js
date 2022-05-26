import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FriendsChoice from './FriendsChoice';
import Chat from './Chat';
import TextInput from './TextInput';
import InfoIcon from '@mui/icons-material/Info';
import { Backdrop } from '@mui/material';
import ProfileCard from '../ProfileCard';

const drawerWidth = 240;

function ChatFriends(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <FriendsChoice
        friends={props.friends}
        openChat={(id) => {
          props.setFriend(id);
          handleDrawerToggle();
        }}
      />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return props.friend === undefined ? (
    <h1>
      Go to the 'find' Tab to find some friends you can chat to!
    </h1>
  ) : (
    <Box sx={{ display: 'flex'
     }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography align='left' variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
            {`${props.friend.firstname} ${props.friend.lastname}`}
          </Typography>
          <IconButton
            color="inherit"
            aria-label={`show profile of ${props.friend.firstname} ${props.friend.lastname}`}
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ 
            height: { sm: '100%' },
            //flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)`},
            position: 'absolute',
            left: { xs: 0, sm: drawerWidth },
            right: 0,
            top: 0,
            bottom: 0
        }}
      >
        <div style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>

          <Backdrop
            sx={{zIndex: (theme => theme.zIndex.drawer + 1)}}
            open={open}
            onClick={() => setOpen(false)}
          >
            
            <ProfileCard
             public_id={props.friend.public_id}
             firstname={props.friend.firstname}
             lastname={props.friend.lastname}
             age={props.friend.age}
             email={props.friend.email}
             country={props.friend.country}
             state={props.friend.state}
             city={props.friend.city}
             biography={props.friend.biography}
             interests={props.friend.interests}

             friend={false}
             close={true}
          />

          </Backdrop>

          <Chat
            messages={props.messages}
            friend_id={props.friend.public_id}
            style={{
              minHeight: '100%'
            }}
          />

          <TextInput
            sendMessage={props.sendMessage}
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          />
          
        </div>
      </Box>
    </Box>
  );
}

export default ChatFriends;
