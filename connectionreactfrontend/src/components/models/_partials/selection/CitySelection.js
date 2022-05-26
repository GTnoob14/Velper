import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CitySelect(props) {

  return (
    <Autocomplete
      id="city-select-demo"
      sx={{ width: 220, margin: '0 auto'}}
      options={props.cities}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(e, v) => props.onChange(v)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.name}
          variant={props.variant}
          required
          value={props.city}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
