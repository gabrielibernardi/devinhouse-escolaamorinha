import { Box, Paper, TextField, Typography, Button } from "@material-ui/core";
import BirthDate from "../components/birthDate";
import PhoneNumber from "../components/phoneNumber";
import "../containers/cadastro.css"

function Cadastro(props) {
    const { aluno, setAluno } = props;
    
    const handleChange = (event) => {
            const { value, name } = event.target
            //console.log("name", name, "value", value)
            setAluno({...aluno, [name]: value })
    }
    return (
   
        <Box component={Paper} p={2}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
                Cadastro
            </Typography>

            <Box component="form">
                <TextField 
                fullWidth
                margin="dense"
                variant="filled" 
                size="small" 
                label="Nome Completo" 
                value={aluno.nome}
                name="nome" //o que vc deseja mudar no input
                onChange={handleChange}
                
                
             >
                </TextField>
                <BirthDate aluno={aluno} setAluno={setAluno}>
                </BirthDate>
                <PhoneNumber aluno={aluno} setAluno={setAluno}> 
                </PhoneNumber>
            </Box>
            <Box className='button-wrapper'>
                <Button 
                variant='contained' 
                color='primary' 
                type='submit'>Salvar</Button>
                <Button 
                variant='contained' 
                color='primary' 
                type='submit'
                style={{ marginLeft: "10px" }}>Novo</Button>
            </Box>
        </Box>
    )
}
export default Cadastro