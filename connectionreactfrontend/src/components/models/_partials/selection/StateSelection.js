import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function StateSelect(props) {

  return (
    <Autocomplete
      id="state-select-demo"
      sx={{ width: 220, margin: '0 auto'}}
      options={props.states}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(e, v) => props.onChange(v)}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name} ({option.iso2})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"State"}
          variant={props.variant}
          required
          value={props.state}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          
        />
      )}
    />
  );
}
