import { useState,useEffect } from 'react'
import '../App.js'
import React from 'react';
import { useParams } from "react-router-dom";
 
function EditPeople(){
    
    const params = useParams(); 
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [dataAdmissao, setDataAdmissao] = useState("");
    const [funcao, setFuncao] = useState("");
        
    console.log(params.id);
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:5000/people/" + params.id, {
                method: "PUT",
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
                alert('Funcionario ' + nome + ' atualizado com sucesso!');
            } 
        } catch (err) {
            console.log(err);
        }
    };
    return (  
         <div class="container-form">  
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Atualizar Funcionario</h3>
                <br></br>
                <fieldset>
                    <input placeholder="Seu nome" type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu RG" type="text" name="rg" value={rg} onChange={(e) => setRg(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <input placeholder="Seu CPF" type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Data de Nascimento:   </label>
                    <input type="date"  name="data_nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label>Data de Admissão:   </label>
                    <input type="date" name="data_admissao" value={dataAdmissao} onChange={(e) => setDataAdmissao(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Sua função" name="funcao" value={funcao} onChange={(e) => setFuncao(e.target.value)}></textarea>
                </fieldset>
                <fieldset>
                    <button type="submit" id="contact-submit">Atualizar</button>
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
export default EditPeople;