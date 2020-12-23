import { TextField } from "@material-ui/core";


function SearchField() {

    return (
   <TextField 
   id="filled-search" 
   label="Pesquise pelo nome do aluno(a)" 
   type="search" 
   variant="outlined"
   fullWidth
   />
      
)}

export default SearchField;