import React from "react";

export default props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">SKU</th>
          <th scope="col">Preço</th>
          <th scope="col">Fornecedor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.produtos !== null &&
          props.produtos.length > 0 &&
          props.produtos.map((produto, index) => {
            return (
              <tr className="table-default" key={index}>
                <td>{produto.nome}</td>
                <td>{produto.sku}</td>
                <td>{produto.preco}</td>
                <td>{produto.fornecedor}</td>
                <td>
                  <button
                    onClick={() => props.prepareAction(produto.sku)}
                    className="btn btn-primary"
                  >
                    Alterar
                  </button>
                  <button
                    onClick={() => props.deleteAction(produto.sku)}
                    className="btn btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
