import { Box, Paper, TextField, Typography, Button } from "@material-ui/core";
import InputMask from "react-input-mask";
import Select from "../components/select";
import { useState } from "react";
import Checkbox from "../components/checkbox";
import "../containers/cadastro.css";

function Cadastro({ aluno, setAluno, alunos, setAlunos }) {
    const [listaemergencia] = useState([
        { value: "pais", label: "Pais" },
        { value: "tios", label: "Tios" },
        { value: "avós", label: "Avós" },
        { value: "padrinhos", label: "Padrinhos" }
    ]);
    const [listaautorizados] = useState([
        { value: "padrinho", label: "Pedro-padrinho" },
        { value: "tios", label: "Tios" },
        { value: "avós", label: "Avós" },
        { value: "padrinhos", label: "Padrinhos" }
    ]);

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log(name, value)
        setAluno({ ...aluno, [name]: value })
    }

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
                <>
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

                    <TextField
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        margin="dense"
                        variant="filled"
                        size="small"
                        label="Nome do Responsável pela Criança"
                        value={aluno.nomeresponsavel}
                        name="nomeresponsavel"
                        onChange={handleChange}
                    >
                    </TextField>

                    <Select
                        label="Em caso de emergência avisar"
                        options={listaemergencia}>
                    </Select>

                    <InputMask
                        mask='(99) 9999-99999'
                        value={aluno.fone}
                        onChange={handleChange}
                    >
                        {() =>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="dense"
                                variant="filled"
                                size="small"
                                type="phoneNumber"
                                label="Telefone para Emergências"
                                name="fone"
                            >
                            </TextField>}
                    </InputMask>
                    <Checkbox
                        label="Possui restrições alimentares"
                        type="checkbox"
                    >
                    </Checkbox>
                    <Select
                        label="Pessoas autorizadas a buscar"
                        options={listaautorizados}
                    >
                    </Select>

                </>

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