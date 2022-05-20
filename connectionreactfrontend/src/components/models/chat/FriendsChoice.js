import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ButtonBase } from '@mui/material';

export default function FriendsChoice(props) {
    var first = true;
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
          
        props.friends.map(friend => {
            let item = (
                    <div key={friend.public_id}>
                        {!first ? (<Divider variant="inset" component="li" />) : null}
                        <ButtonBase onClick={() => props.openChat(friend.public_id)}>
                            <ListItem  alignitem="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="profile" src="https://hbs-customs.de/wp-content/uploads/2015/04/blank-profile-picture-973460_640.png" /> 
                                </ListItemAvatar>
                                    <ListItemText
                                        primary={`${friend.firstname} ${friend.lastname}`}
                                    />
                            </ListItem>
                        </ButtonBase>
                    </div>
                );
            first = false;
            return item;
        })
      }
      </List>
  );
}