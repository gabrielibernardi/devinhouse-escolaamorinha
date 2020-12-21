import { Box, Paper, TextField, Typography, Button } from "@material-ui/core";
import BirthDate from "../components/birthDate";
import PhoneNumber from "../components/phoneNumber";
import "../containers/cadastro.css"

function Cadastro() {
    return (

        <Box component={Paper} p={2}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
                Cadastro
            </Typography>

            <Box component="form">
                <TextField variant="filled" size="small" label="Nome completo" fullWidth margin="dense"></TextField>
                <BirthDate></BirthDate>
                <PhoneNumber></PhoneNumber>
            </Box>

            <Box className='button-wrapper'>
                <Button variant='contained' color='primary' type='submit'>Salvar</Button>
                <Button variant='contained' color='primary' type='submit'style={{ marginLeft: "10px" }}>Novo</Button>
            </Box>
        </Box>
    )
}
export default Cadastro