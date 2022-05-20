import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [value, setValue] = React.useState(props.value || 0);
  const navigate = useNavigate();

  return (
    <Box >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    navigate(`/${newValue}`);
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction value="find" label="Find" icon={<SearchIcon />} />
                <BottomNavigationAction value="chat" label="Chat" icon={<ChatIcon />} />
                <BottomNavigationAction value="profile" label="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
        </Paper>
    </Box>
  );
}

export default Navbar;
