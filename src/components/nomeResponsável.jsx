import { TextField } from "@material-ui/core";

function NomeResponsavel (props) {
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
        label="Nome do Responsável"
        value={aluno.nomeresponsavel}
        name="nomeresponsavel" 
        onChange={handleChange}

    >
        </TextField>

)}

export default NomeResponsavel