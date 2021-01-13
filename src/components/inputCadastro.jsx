import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";


function InputCadastro(props) {
    const { aluno, setAluno } = props;

    const handleChange = (event) => {
        const { value, name } = event.target
        //console.log(name, value)
        setAluno({ ...aluno, [name]: value })
    }
    return (
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
                label="Nome do Responsável"
                value={aluno.nomeresponsavel}
                name="nomeresponsavel"
                onChange={handleChange}

            >
            </TextField>
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
                        label="Telefone para contato"
                        name="fone"
                    >
                    </TextField>}
            </InputMask>


        </>
    )
}

export default InputCadastro