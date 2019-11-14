import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Autentica from "./pages/Autentica";

import Cadastro from "./pages/Cadastro";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Autentica} />
      <Route path="/Cadastro" component={Cadastro} />
    </BrowserRouter>
  );
}
