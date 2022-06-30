import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import CitySelect from '../../_partials/selection/CitySelection';
import CountrySelect from '../../_partials/selection/CountrySelection';
import StateSelect from '../../_partials/selection/StateSelection';

const textFieldStyle = {
    'margin': '10px'
};

const IdentificationProcess = (props) => {
  return (
    <div>
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
      <CountrySelect
          label="Country"
          variant="filled"
          required
          country={props.country}
          onChange={props.updateCountry}
          style={textFieldStyle}

          countries={props.countries}
      /><br />
      <StateSelect
          label="State"
          variant="filled"
          required
          state={props.state}
          onChange={props.updateState}
          style={textFieldStyle}

          states={props.states}
      /><br />
      <CitySelect
          label="City"
          variant="filled"
          required
          city={props.city}
          onChange={props.updateCity}
          style={textFieldStyle}
        
          cities={props.cities}
      />
      {/** TODO finish Gender Settings in Signup Process */}
      <FormControl style={textFieldStyle} sx={{minWidth: 220}}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
            labelId='gender'
            value={props.gender}
            defaultValue={'male'}
            label='Gender'
            onChange={(event) => props.updateGender(event.target.value)}
        >
            <MenuItem key={'male'} value={'male'}>Male</MenuItem>
            <MenuItem key={'female'} value={'female'}>Female</MenuItem>
            <MenuItem key={'diverse'} value={'diverse'}>Diverse</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}

export default IdentificationProcess;