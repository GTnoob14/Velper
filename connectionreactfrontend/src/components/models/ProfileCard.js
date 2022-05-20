import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProfileCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { `${props.firstname} ${props.lastname} (${props.age})` }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${props.city}, ${props.country}`}
          </Typography>
          <Typography variant="body1" color="text.primary">
            { props.biography }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" color="primary" variant='contained' onClick={() => props.addToFriends(props.public_id)}>
            Add
        </Button>
        <Button size="small" color="error" variant='contained' onClick={props.next}>
            Skip
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProfileCard