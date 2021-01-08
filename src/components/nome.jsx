import { TextField } from "@material-ui/core";

function Nome (props) {
    const { aluno, setAluno } = props;

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log(name, value)
        setAluno({...aluno, [name]: value })
} 
    return(  

        <TextField
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="dense"
        variant="filled"
        size="small"
        label="Nome Completo"
        value={aluno.nome}
        name="nome" 
        onChange={handleChange}

    >
        </TextField>

)}

export default Nome