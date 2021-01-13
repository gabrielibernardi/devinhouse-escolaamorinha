import { Box, Typography, Table, TableHead, TableRow, TableCell, Button, TableBody } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import SearchField from "../components/searchField";
import "../containers/listagem.css"



function Listagem (props) {
    const { alunos, setAlunos, setAluno } = props

   const handleEdit = (id) => {
       const alunoClicado = alunos.find(item => item.id === id)
       setAluno(alunoClicado)
       
   }

   const handleDelete = (id) => {
      const result = alunos.filter(item => item.id !== id)
      setAlunos(result)
   }
    
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
                        <TableCell align="center">Contato de emergência</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {alunos.map((linha) => (
                    <TableRow key={linha.id}>
                        <TableCell align="center">{linha.nome}</TableCell>
                        <TableCell align="center">{linha.data}</TableCell>
                        <TableCell align="center">{linha.nomeresponsavel}</TableCell>
                        <TableCell align="center">{linha.fone}</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell className="button-wrapper" align="center">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ marginRight: "10px" }}
                                startIcon={<Edit />}
                                onClick={() => handleEdit(linha.id)}
                                                                
                            >
                                Editar
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<Delete />}
                                onClick={() => handleDelete(linha.id)}
                                                             
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