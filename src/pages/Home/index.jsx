import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import Cadastro from "../../containers/cadastro";
import Listagem from "../../containers/listagem";
import "../Home/index.css";
import Header from "../../components/header";


function Home() {
    const [ alunos, setAlunos ] = useState([]);
    const [ aluno, setAluno ] = useState([{id: 0, nome: "", data: "", fone:"", }])
        return (
        <Box m={4}>
          <Header></Header> 
            <Grid className="containers" container spacing={2}>
                <Grid item xs={12} sm={8} >
                    <Cadastro 
                    aluno={aluno} 
                    setAluno={setAluno} 
                    alunos={alunos} 
                    setAlunos={setAlunos} 
                />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Listagem alunos={alunos} setAlunos={setAlunos} />
                </Grid>
            </Grid>
        </Box>
    )

}
     
    


export default Home;