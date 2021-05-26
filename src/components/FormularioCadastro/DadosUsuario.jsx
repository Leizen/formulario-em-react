import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        id="email"
        label="email"
        type="email"
        required
      ></TextField>

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        variant="outlined"
        fullWidth
        margin="normal"
        id="senha"
        label="senha"
        type="password"
        required
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
