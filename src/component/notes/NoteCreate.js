import React from 'react'
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    const[isPending, setIsPending] = useState(false);
    const navigate =  useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {title, body};

        setIsPending(true);      

        fetch('https://manageme-server.herokuapp.com/notes/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        }).then(() => {
        console.log("new note added");
        setIsPending(false);
        navigate('/notes');
        })

        
    }


    return ( 
        <div className="create">
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit} >
                <label> Note title:</label>
                <input 
                type="text" 
                required
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Note body:</label>
                 <textarea
                 required
                 value = {body}
                onChange={(e) => setBody(e.target.value)}
                >
                 </textarea>

                 { !isPending && <button>Add Note</button>}
                 {isPending && <button>Adding Note...</button>}
            </form>
        </div>
     );
}
 
export default Create;