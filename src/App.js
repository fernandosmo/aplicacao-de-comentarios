import React, { Component } from 'react';
import './App.css';

import Coments from './components/Coments';

class App extends Component {
  state = {
    coments: [
      {
        name: 'João',
        email: 'joao@mail.com',
        date: new Date(2022, 6, 20, 17, 30, 0),
        message: 'Olá, tudo bem?',
      },
      {
        name: 'Pedro',
        email: 'pedro@mail.com',
        date: new Date(2022, 6, 21, 12, 15, 0),
        message: 'Olá, tudo bem sim....',
      },
    ],
    newComent: {
      name: '',
      email: '',
      message: '',
    },
  };

  addComent = (event) => {
    event.preventDefault();
    const newComent = { ...this.state.newComent, date: new Date() };
    this.setState({
      coments: [...this.state.coments, newComent],
      newComent: { name: '', email: '', message: '' },
    });
  };

  removeComent = (coment) => {
    let list = this.state.coments;
    list = list.filter((c) => c !== coment);
    this.setState({ coments: list });
  };

  enteredData = (event) => {
    const { name, value } = event.target;
    this.setState({
      newComent: { ...this.state.newComent, [name]: value },
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.coments.map((coment, indice) => (
          <Coments
            key={indice}
            name={coment.name}
            email={coment.email}
            date={coment.date}
            onRemove={this.removeComent.bind(this, coment)}>
            {coment.message}
          </Coments>
        ))}

        <form method="post" onSubmit={this.addComent} className="Novo-Coment">
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.newComent.name}
              onChange={this.enteredData}
              required
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.newComent.email}
              onChange={this.enteredData}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={this.state.newComent.message}
              onChange={this.enteredData}
              required
              rows="4"
            />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
