import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  // console.log(cep);

  // function Teste(valor) {
  //   setCep(valor);

  //   fetch(`http://viacep.com.br/ws/${valor}/json/`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  function onBlurCep(value) {
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setEndereco(data.logradouro);
        setEstado(data.uf);
        setCidade(data.localidade);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    aoEnviar({ cep, endereco, numero, estado, cidade });
  }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <TextField
        onBlur={(event) => {
          onBlurCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="endereco"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
