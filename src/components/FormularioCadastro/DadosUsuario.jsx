import { Button, TextField } from "@mui/material";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField
        id="email"
        label="E-mail"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
