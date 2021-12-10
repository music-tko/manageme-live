import React from 'react'
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Create = () => {
    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    // const[author, setAuthor] = useState("mario"); 
    const[isPending, setIsPending] = useState(false);
    const navigate =  useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {title, body};

        setIsPending(true);      

        fetch('http://localhost:3002/notes', {
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
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input 
                type="text" 
                required
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label> Blog body:</label>
                 <textarea
                 required
                 value = {body}
                onChange={(e) => setBody(e.target.value)}
                >
                 </textarea>

                 { !isPending && <button>Add Blog</button>}
                 {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;