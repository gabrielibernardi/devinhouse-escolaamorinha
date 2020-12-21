import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

function PhoneNumber() {
    return (
        <InputMask mask='(99) 9999-99999'>
            {() =>
                <TextField variant="filled" size="small" type="phoneNumber" label="Telefone" fullWidth margin="dense">
                </TextField>}
        </InputMask>
    )
}

export default PhoneNumber