import { TextField } from '@mui/material';
import React from 'react'
import { Chip, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
            [...props.interests].map(o => {
                let i = undefined;
                if(o.id !== undefined){
                    i = o;
                }else{
                    i = {id: o, interest: o};
                }

                return (
                    <Chip key={i.id} style={{margin: '5px'}} label={i.interest} variant="outlined" onDelete={() => {
                        props.updateInterests(new Set([...props.interests].filter(interest => interest !== i)));
                    }} />
                )
                })
        }
      </div>
    )
}

export default AccountProcess;
