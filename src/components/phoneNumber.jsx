import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

function PhoneNumber() {
    return (
        <InputMask mask='(99) 9999-99999'>
            {() =>
                <TextField 
                fullWidth 
                margin="dense"
                variant="filled" 
                size="small" 
                type="phoneNumber" 
                label="Telefone" 
                
                >
                </TextField>}
        </InputMask>
    )
}

export default PhoneNumber


/* import React from 'react';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
 
// Will work fine
const Input = (props) => (
  <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
  </InputMask>
); */