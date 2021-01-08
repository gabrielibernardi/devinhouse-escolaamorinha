import { Box, Paper, Typography, Button } from "@material-ui/core";
import BirthDate from "../components/birthDate";
import PhoneNumber from "../components/phoneNumber";
import Nome from "../components/nome";
import "../containers/cadastro.css"

function Cadastro({ aluno, setAluno, alunos, setAlunos }) {


    const handleSubmit = (event) => {
       

        event.preventDefault();
        /* setAlunos(alunos.push(aluno)); */
        setAlunos([...alunos,
        {
            ...aluno, id: Math.random().toString(36).substr(2, 9),

        },

     ])
        setAluno({
            id: 0,
            nome: "",
            data: "",
            fone: "",
        }) 
   };


    return (
        <Box component={Paper} p={2}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
                Cadastro
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <Nome aluno={aluno} setAluno={setAluno}></Nome>
                <BirthDate aluno={aluno} setAluno={setAluno}></BirthDate>
                <PhoneNumber aluno={aluno} setAluno={setAluno}></PhoneNumber>

                <Box className='button-wrapper'>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >Salvar
                </Button>
             </Box>
            </Box>

        </Box>
    )
}
export default Cadastro