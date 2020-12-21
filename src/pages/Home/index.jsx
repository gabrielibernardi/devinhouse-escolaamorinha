import { Box, Typography, Grid } from "@material-ui/core";
import Cadastro from "../../containers/cadastro";
import Listagem from "../../containers/listagem";
import "../Home/index.css";

function Home() {
    return (
        <Box m={4}>
            <Typography
                component='h1'
                variant='h3'
                align='left'
                color='textSecondary'
                gutterBottom
            >
                Escola Amorinha
            </Typography>

            <Grid className="containers" container spacing={2}>
                <Grid item xs={12} sm={8} >
                    <Cadastro />
                </Grid>
                <Grid item xs={12} sm={8} >
                     <Listagem />
                </Grid>
            </Grid>
        </Box>
    )

}

export default Home;