import { TextField } from '@mui/material';
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
          value={props.country}
          onChange={props.updateCountry}
          style={textFieldStyle}

          countries={props.countries}
      /><br />
      <StateSelect
          label="State"
          variant="filled"
          required
          value={props.state}
          onChange={props.updateState}
          style={textFieldStyle}

          states={props.states}
      /><br />
      <CitySelect
          label="City"
          variant="filled"
          required
          value={props.city}
          onChange={props.updateCity}
          style={textFieldStyle}
        
          cities={props.cities}
      />
      </div>
  )
}

export default IdentificationProcess;