import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

function PhoneNumber(props) {
    const { aluno, setAluno } = props;

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log("name", name, "fone", fone, "value", value)
        setAluno({...aluno, [name]: value })
}
    return (
        <InputMask 
        mask='(99) 9999-99999'
        value={aluno.fone}
        onChange={handleChange}
        >
            {() =>
                <TextField 
                fullWidth 
                margin="dense"
                variant="filled" 
                size="small" 
                type="phoneNumber" 
                label="Telefone"
                name="fone"
                              
                >
                </TextField>}
        </InputMask>
    )
}

export default PhoneNumber


