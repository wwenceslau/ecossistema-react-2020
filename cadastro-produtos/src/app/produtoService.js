const PRODUTOS = "_PRODUTOS";

export function ErroValidacao(errors) {
  this.errors = errors;
}

export default class ProdutoService {
  obterProdutos = () => {
    const produtos = localStorage.getItem(PRODUTOS);
    if (!produtos) {
      return [];
    }
    return JSON.parse(produtos);
  };

  validar = produto => {
    const errors = [];
    if (!produto.nome) {
      errors.push("O nome deve ser informado!");
    }

    if (!produto.sku) {
      errors.push("O SKU deve ser informado!");
    }

    if (!produto.preco || produto.preco <= 0) {
      errors.push("O preço deve ter o valor maior que zero(0)!");
    }

    if (!produto.fornecedor) {
      errors.push("O fornecedor deve ser informado!");
    }

    if (errors.length > 0) {
      throw new ErroValidacao(errors);
    }
  };

  obterIndex = sku => {
    let index = null;
    this.obterProdutos().forEach((produto, i) => {
      if (produto.sku === sku) {
        index = i;
      }
    });
    return index;
  };

  delete = sku => {
    const index = this.obterIndex(sku);
    if (index !== null) {
      const produtos = this.obterProdutos();
      produtos.splice(index, 1);
      localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
      return produtos;
    }
  };

  save = produto => {
    this.validar(produto);
    let produtos = localStorage.getItem(PRODUTOS);

    if (!produtos) {
      produtos = [];
    } else {
      produtos = JSON.parse(produtos);
    }

    const index = this.obterIndex(produto.sku);
    if (index === null) {
      produtos.push(produto);
    } else {
      produtos[index] = produto;
    }
    localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
  };
}
