import React from 'react';
import PeopleList from '../Components/PeopleList'
import { useState,useEffect } from 'react'
import '../App.css'

function Home(){
    const [people, setPeople] = useState([]);

    // Modify the current state by setting the new data to
    // the response from the backend
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/people',{
        'methods':'GET',
        headers : {
            'Content-Type':'application/json'
        }
        })
        .then(response => response.json())
        .then(response => setPeople(response.data))
        .catch(error => console.log(error))
    },[])
    
    return (
        <div className="App container m-4">
            <div className="row">
                <div className="text-center">
                    <h1>Registro de funcionarios</h1>
                </div>
            </div>

            <PeopleList 
            people={people} 
            />
            <span class="button--bubble__container">
                <a href="/newpeople" class="button button--bubble">
                    Adicionar novo
                </a>
            </span>
        </div>
    )   
}
export default Home;