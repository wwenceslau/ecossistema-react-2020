import React from "react";

import Card from "../../components/card";
import ProdutoService from "../../app/produtoService";

const initialState = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
  errors: [],
  atualizando: false
};

class CadastroProduto extends React.Component {
  state = initialState;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = event => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor
    };
    try {
      this.service.save(produto);
      this.onClean();
      this.setState({ sucesso: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  onClean = () => {
    this.setState(initialState);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;
    if (sku) {
      const resultado = this.service
        .obterProdutos()
        .filter(produto => produto.sku === sku);
      if (resultado.length === 1) {
        this.setState({ ...resultado[0], atualizando: true });
      }
    }
  }

  render() {
    return (
      <Card
        header={
          this.state.atualizando
            ? "Atualização de Produto"
            : "Cadastro de Produto"
        }
      >
        <form id="frmProduto" onSubmit={this.onSubmit}>
          {this.state.sucesso && (
            <div className="alert alert-dismissible alert-success">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <strong>Perfeito!</strong> Poduto cadastrado com sucesso!
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map((msg, index) => {
              return (
                <div
                  className="alert alert-dismissible alert-danger"
                  key={index}
                >
                  <button type="button" className="close" data-dismiss="alert">
                    &times;
                  </button>
                  <strong>Erro! </strong>
                  {msg}
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.onChange}
                  value={this.state.nome}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  disabled={this.state.atualizando}
                  onChange={this.onChange}
                  value={this.state.sku}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição: *</label>
                <textarea
                  name="descricao"
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  type="text"
                  name="preco"
                  onChange={this.onChange}
                  value={this.state.preco}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  type="text"
                  name="fornecedor"
                  onChange={this.onChange}
                  value={this.state.fornecedor}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button type="submit" className="btn btn-success">
                {this.state.atualizando ? "Atualizar" : "Salvar"}
              </button>
            </div>
            <div className="col-md-1">
              <button className="btn btn-primary" onClick={this.onClean}>
                Limpar
              </button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default CadastroProduto;
