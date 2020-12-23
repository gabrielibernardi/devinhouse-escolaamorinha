import { Box, Typography, Table, TableHead, TableRow, TableCell, Button, TableBody } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import SearchField from "../components/searchField";
import "../containers/listagem.css"



function Listagem (props) {
    const { alunos, setAlunos } = props
    
    return (
        
        <Box>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
                Listagem
            </Typography>
            <SearchField />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Data Nasc.</TableCell>
                        <TableCell align="center">Turma</TableCell>
                        <TableCell align="center">Telefone</TableCell>
                        <TableCell align="center">Responsável</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {alunos.map((linha) => (
                    <TableRow key={linha.id}>
                        <TableCell align="center">{linha.nome}</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell className="button-wrapper" align="center">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginRight: "10px" }}
                                startIcon={<Edit />}
                                
                            >
                                Editar
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Delete />}
                              
                                
                            >
                                Deletar
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    )

}

export default Listagem;