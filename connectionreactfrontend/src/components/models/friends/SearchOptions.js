import { Button, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import React, { Component } from 'react'
import SCOPE from '../../../api/_models/Scope.datamodel';

export default class SearchOptions extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            mfChecked: props.mutualFriends,
            siChecked: props.similarInterests,
            ssChecked: props.sameSex,
            scope: props.scope,
        }
    }
    
    mfChange = () => {
        this.setState({mfChecked: !this.state.mfChecked});
    }

    siChange = () => {
        this.setState({siChecked: !this.state.siChecked});
    }

    ssChange = () => {
      this.setState({ssChecked: !this.state.ssChecked});
    }

    scopeChange = (scope) => {
        this.setState({scope: scope});
    }

    render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Search Settings</h1>
        <Divider />
        <FormControl style={{margin: '20px'}}>
        <InputLabel id="scope-search-options">Scope</InputLabel>
          <Select
            labelId='scope-search-options'
            value={this.state.scope}
            label='Scope'
            onChange={(event) => this.scopeChange(event.target.value)}
          >
            {
              
              Object.values(SCOPE).map(sc => (
                <MenuItem key={sc.enum} value={sc}>{sc.name}</MenuItem>
              ))
            }
          </Select>
          <FormControlLabel
            control={
              <Switch checked={this.state.mfChecked} onChange={this.mfChange} />
            }
            label='Prioritize Mutual Friends'
            labelPlacement='start'
          />
          <FormControlLabel
            control={
              <Switch checked={this.state.siChecked} onChange={this.siChange} />
            }
            label='Look for similar Interests'
            labelPlacement='start'
          />
          <FormControlLabel
            control={
              <Switch checked={this.state.ssChecked} onChange={this.ssChange} />
            }
            label='Look for same sex'
            labelPlacement='start'
          />
          <Button variant="contained" onClick={() => this.props.submit(this.state.scope, this.state.mfChecked, this.state.siChecked, this.state.ssChecked)}>Search</Button>
        </FormControl>
      </div>
    )
  }
}
