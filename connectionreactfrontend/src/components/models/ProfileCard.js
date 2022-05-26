import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Chip } from '@mui/material';

function ProfileCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { `${props.firstname} ${props.lastname} (${props.age})` }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${props.city}, ${props.country} (${props.state})`}
          </Typography>
          <Typography variant="body1" color="text.primary">
            { props.biography }
          </Typography>
          <Box>
            {[...props.interests].map(interest => {
              return (
                <Chip key={interest.id} style={{margin: '5px'}} label={interest.interest} variant="outlined" />
              )
            })}
          </Box>
        </CardContent>
      </CardActionArea>
      {props.friend ? (
        <CardActions style={{justifyContent: 'center'}}>
          <Button size="small" color="primary" variant='contained' onClick={() => {props.addToFriends(props.public_id); props.next()}}>
              Add
          </Button>
          <Button size="small" color="error" variant='contained' onClick={props.next}>
              Skip
          </Button>
        </CardActions>
      ) : (
        <CardActions style={{justifyContent: 'center', marginBottom: '15px' }}>
          <Button size="small" color={props.close ? "warning" : "primary"} variant='contained' onClick={props.updateUser}>
            {props.close ? 'Close' : 'Update'}
          </Button>
        </CardActions>
      ) }
    </Card>
  )
}

export default ProfileCard