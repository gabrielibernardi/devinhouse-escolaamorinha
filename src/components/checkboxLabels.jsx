import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormGroup from '@material-ui/core/FormGroup';
import { Typography } from "@material-ui/core";
import { TextField } from '@material-ui/core';


function CheckboxLabels() {
  const [state, setState] = useState({
    checkedA: false, 
    checkedB: false, 
  });

const handleChange = (event) => {
    const { name, checked } = event.target
        setState({ ...state, [name]: checked });
        
};
  return (
    <>
      <Typography>
        Possui alguma restrição alimentar?
  </Typography>

     {/*  <FormGroup row> */}
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="Sim"
      />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Não"
        />

     {/*  </FormGroup> */}
      <TextField
      label="Digite a restrição alimentar:"
      InputLabelProps={{ shrink: true }}
      fullWidth
      >
        
    </TextField>
    </>
  )
}

export default CheckboxLabels;