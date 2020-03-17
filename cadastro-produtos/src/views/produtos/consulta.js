import React from "react";
//import { withRouter } from "react-router-dom";

import Card from "../../components/card";
import ProdutoTable from "./produtotable";
import ProdutoService from "../../app/produtoService";

export default class ConsultaProduto extends React.Component {
  constructor() {
    super();
    this.service = new ProdutoService();
  }

  state = {
    produtos: []
  };

  componentDidMount() {
    const produtos = this.service.obterProdutos();
    this.setState({ produtos });
  }

  prepareEdit = sku => {
    this.props.history.push(`/cadastro-produto/${sku}`);
  };

  delete = sku => {
    const produtos = this.service.delete(sku);
    this.setState({ produtos });
  };

  render() {
    return (
      <Card header="Consulta de Produtos">
        <ProdutoTable
          produtos={this.state.produtos}
          prepareAction={this.prepareEdit}
          deleteAction={this.delete}
        />
      </Card>
    );
  }
}
