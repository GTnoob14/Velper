import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
    '': ''
};

const textFieldStyle = {
    'margin': '10px'
};

const Form = (props) => {

  const [currentInterest, setCurrentInterest] = React.useState('');

  return (
    <div style={style}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={props.firstName}
        onChange={e => props.updateFirstName(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={props.lastName}
        onChange={e => props.updateLastName(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Age"
        variant="filled"
        type="number"
        required
        value={props.age}
        onChange={e => props.updateAge(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={props.email}
        onChange={e => props.updateEmail(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={props.password}
        onChange={e => props.updatePassword(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Country"
        variant="filled"
        type="text"
        required
        value={props.country}
        onChange={e => props.updateCountry(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="City"
        variant="filled"
        type="text"
        required
        value={props.city}
        onChange={e => props.updateCity(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Biography"
        variant="filled"
        type="text"
        required
        value={props.biography}
        onChange={e => props.updateBiography(e.target.value)}
        style={textFieldStyle}
      /><br />
      <TextField
        label="Interest"
        variant="filled"
        type="text"
        value={currentInterest}
        onChange={e => setCurrentInterest(e.target.value)}
        style={textFieldStyle}
        onSubmit={() => {
          props.updateInterests(new Set([...props.interests, currentInterest]))
          setCurrentInterest('');
        }}
      />
      <IconButton 
        //TODO add style
        aria-label="add interest"
        color="primary"
        onClick={() => {
          props.updateInterests(new Set([...props.interests, currentInterest]))
          setCurrentInterest('');
        }}
      >
        <AddIcon  />
      </IconButton>
      <br />
      {
        [...props.interests].map(i => {
          return (
            <Chip key={i} style={{margin: '5px'}} label={i} variant="outlined" onDelete={() => {
              props.updateInterests(new Set([...props.interests].filter(interest => interest !== i)));
            }} />
          )
        })
      }
      <div>
        <Button 
          variant="contained"
          onClick={() => window.location.href = '/'}
          style={textFieldStyle}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={props.signUp}
          style={textFieldStyle}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Form;
