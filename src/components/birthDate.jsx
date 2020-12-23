import { TextField } from "@material-ui/core";

function BirthDate(props) {
    const { aluno, setAluno } = props;

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log("name", name, "data", data, "value", value)
        setAluno({...aluno, [name]: value })
}
    return(  

    <TextField 
    InputLabelProps={{ shrink: true }}
    fullWidth 
    margin="dense"
    variant="filled" 
    size="small" 
    type="date" 
    label="Data de Nascimento"
    value={aluno.data} 
    name="data"
    onChange={handleChange}
    >
     </TextField>

)}

export default BirthDate