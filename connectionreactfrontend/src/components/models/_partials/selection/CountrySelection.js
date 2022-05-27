import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect(props) {

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 220, margin: '0 auto'}}
      options={props.countries}
      autoHighlight
      value={props.country}
      getOptionLabel={(option) => option.name}
      onChange={(e, v) => props.onChange(v)}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.iso2.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.iso2.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name} ({option.iso2})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Country"}
          variant={props.variant}
          required
          value={props.country}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
