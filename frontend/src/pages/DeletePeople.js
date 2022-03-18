import { useState,useEffect } from 'react'
import '../App.js'
import React from 'react';
import { useParams } from "react-router-dom";
 
function DeletePeople(){
    
    const params = useParams();
        
    console.log(params.id);
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:5000/people/" + params.id, {
                method: "DELETE",
                headers : {
                    'Content-Type':'application/json'
                },
            });
            if (res.status === 200) {
                alert('Funcionario excluido com sucesso!');
            } 
        } catch (err) {
            console.log(err);
        }
    };
    return (  
         <div class="container-form">  
            <form id="contact" onSubmit={handleSubmit}>
                <h3>Tem Certeza que deseja excluir ?</h3>
                <br></br>
                <fieldset>
                    <button type="submit" id="contact-submit">Deletar</button>
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
export default DeletePeople;