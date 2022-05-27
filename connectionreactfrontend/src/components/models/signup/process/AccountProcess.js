import { TextField } from '@mui/material';
import React from 'react'
import { Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InterestSelect from '../../_partials/selection/InterestSelection';

const textFieldStyle = {
    margin: '10px'
}

const AccountProcess = (props) => {

    const [currentInterest, setCurrentInterest] = React.useState('');
    return (
      <div>
        <TextField
            label="Biography"
            variant="filled"
            type="text"
            required
            value={props.biography}
            onChange={e => props.updateBiography(e.target.value)}
            style={textFieldStyle}
        /><br />
        <InterestSelect
            label="Interest/Hobby"
            variant="filled"
            required
            value={currentInterest}
            onChange={(e, v) => setCurrentInterest(v)}
            style={textFieldStyle}
            onSubmit={() => {
                props.updateInterests(new Set([...props.interests, currentInterest]));
                setCurrentInterest('');
            }}

            interestList={[...props.interestList]}
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
            [...props.interests].map(o => {
                let i = undefined;
                if(o.id === undefined){
                    i = o;
                }else{
                    i = {id: o, interest: o};
                }
                
                return (
                    <Chip key={i.id || i} style={{margin: '5px'}} label={i.interest || i} variant="outlined" onDelete={() => {
                        props.updateInterests(new Set([...props.interests].filter(interest => interest !== i)));
                    }} />
                )
                })
        }
      </div>
    )
}

export default AccountProcess;
