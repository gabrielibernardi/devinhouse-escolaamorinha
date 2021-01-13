import { Box, Paper, Typography, Button } from "@material-ui/core";
import CheckboxLabels from "../components/checkboxLabels";
import InputCadastro from "../components/inputCadastro";
import "../containers/cadastro.css";

function Cadastro({ aluno, setAluno, alunos, setAlunos }) {


    const handleSubmit = (event) => {
        event.preventDefault();

        const existeAlunoNaLista = alunos.some(item => item.id === aluno.id)

        if (existeAlunoNaLista) {

            const result = alunos.map(item => {
                if (item.id === aluno.id) {
                    return aluno;
                }
                else {
                    return item;
                }
            })

            setAlunos(result)

        }

        else {
            setAlunos([
                ...alunos,
                {
                    ...aluno,
                    id: Math.random().toString(36).substr(2, 9),
                },
            ]);

            setAluno({ id: 0, nome: "", data: "", nomeresponsavel: "", fone: "" });
        }

    };


    return (
        <Box component={Paper} p={2}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
                Cadastro
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <InputCadastro aluno={aluno} setAluno={setAluno}></InputCadastro>
                <CheckboxLabels></CheckboxLabels>
                <Box className='button-wrapper'>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        style={{ marginRight: "10px" }}
                    >Salvar
                </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default Cadastro