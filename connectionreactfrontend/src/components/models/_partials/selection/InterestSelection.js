import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function InterestSelect(props) {

  return (
    <Autocomplete
      id="interests-select"
      sx={{ width: 220, margin: '0 auto'}}
      options={props.interestList}

      autoHighlight={true}
      freeSolo={true}
      getOptionLabel={(option) => option}
      onInputChange={props.onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant={props.variant}
          required
          value={props.value}
          autoComplete={'off'}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          onKeyDown={(k) => { if(k.key === 'Enter') props.onSubmit()}}
        />
      )}
    />
  );
}
