import React from 'react';

function ComponenteFuncional(props) {

  const criarCombobox = () => {
    const opcoes = ["Masculino", "Feminino"]
    const comboBoxOpcoes = opcoes.map(opcao => <option key={opcao}>{opcao}</option>)
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  const Combo = () => criarCombobox();

  return (
    <div className="App">
      <h1>Hello {props.nome} com idade de {props.idade}</h1> 
     <br />
     <Combo />
    </div>
  );
}

class App extends React.Component {
  state = {
    nome : ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  render(){
    return (
      <>
         <input className="centralizar" type="text" value={this.state.nome} onChange={this.modificarNome} />
         <ComponenteFuncional nome={this.state.nome} idade={this.props.idade}/>
      </>
    )
  }

}

export default App;
