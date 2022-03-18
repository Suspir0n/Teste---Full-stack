import React from 'react';
import People from '../services/requests.js'
import { useState,useEffect } from 'react'


class NewFormPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nome: '',
        rg: '',
        cpf: '',
        data_nascimento: '',
        data_admissao: '',
        funcao: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        nome: event.target.value,
        rg: event.target.value,
        cpf: event.target.value,
        data_nascimento: event.target.value,
        data_admissao: event.target.value,
        funcao: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Funcionario ' + this.state.name + 'salvo com sucesso!');
    event.preventDefault();
    fetch('http://127.0.0.1:5000/people',{
        'methods':'GET',
        headers : {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
   
  }

  render() {
    return (
      <>      
      <div class="container">  
            <form id="contact" onSubmit={this.handleSubmit}>
                <h3>Atualizar Funcionario</h3>
                <br></br>
                <fieldset>
                    <input placeholder="Seu nome" type="text" name="nome" value={this.state.nome} tabindex="1" onChange={this.handleChange} required autofocus/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu RG" type="text" name="rg" value={this.state.rg} tabindex="2" onChange={this.handleChange} required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu CPF" type="text" name="cpf" value={this.state.cpf} tabindex="3" onChange={this.handleChange} required/>
                </fieldset>
                <fieldset>
                    <label>Data de Nascimento:   </label>
                    <input type="date" tabindex="4" name="data_nascimento" value={this.state.data_nascimento} onChange={this.handleChange} required/>
                </fieldset>
                <fieldset>
                    <label>Data de Admissão:   </label>
                    <input type="date" tabindex="4" name="data_admissao" value={this.state.data_admissao} onChange={this.handleChange} required/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Sua função" name="funcao" value={this.state.funcao} tabindex="5" onChange={this.handleChange} required></textarea>
                </fieldset>
                <fieldset>
                    <input name="submit" type="submit" id="contact-submit" value="Atualizar"/>
                </fieldset>
                
            </form>
      </div>
    </>  
    );
  }
}

export default NewFormPeople;