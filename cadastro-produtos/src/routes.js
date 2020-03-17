import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProduto from "./views/produtos/consulta";

export default () => {
  return (
    <Switch>
      <Route exact path="/cadastro-produto/:sku?" component={CadastroProduto} />
      <Route exact path="/consulta-produto" component={ConsultaProduto} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
