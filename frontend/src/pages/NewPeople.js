import { useState,useEffect } from 'react'
import '../App.js'

function NewPeople(){
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [dataAdmissao, setDataAdmissao] = useState("");
    const [funcao, setFuncao] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:5000/people", {
                method: "POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    rg: rg,
                    cpf: cpf,
                    data_nascimento: dataNascimento,
                    data_admissao: dataAdmissao,
                    funcao: funcao,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setNome("");
                setRg("");
                setCpf("");
                setDataNascimento("");
                setDataAdmissao("");
                setFuncao("");
                alert('Funcionario ' + nome + ' criado com sucesso!');
            } else {
                alert('Erro ao criar um novo funcionario!');
            } 
        } catch (err) {
            console.log(err);
        }
  };
    return (  
         <div class="container-form">  
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Criar novo Funcionario</h3>
                <br></br>
                <fieldset>
                    <input placeholder="Seu nome" type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}  required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu RG" type="text" name="rg" value={rg} onChange={(e) => setRg(e.target.value)}  required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu CPF" type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}  required/>
                </fieldset>
                <fieldset>
                    <label>Data de Nascimento:   </label>
                    <input type="date"  name="data_nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required/>
                </fieldset>
                <fieldset>
                    <label>Data de Admiss??o:   </label>
                    <input type="date" name="data_admissao" value={dataAdmissao} onChange={(e) => setDataAdmissao(e.target.value)} required/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Sua fun????o" name="funcao" value={funcao} onChange={(e) => setFuncao(e.target.value)} required></textarea>
                </fieldset>
                <fieldset>
                    <button type="submit" id="contact-submit">Criar</button>
                </fieldset>
            </form>
            <span class="button--bubble__container">
                <a href="/" class="button button--bubble">
                    Voltar
                </a>
            </span>
      </div>
    );   
}
export default NewPeople;
