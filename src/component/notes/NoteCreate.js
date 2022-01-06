import React, { useContext } from 'react'
import { NotesContext } from "../NoteContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const { addNote } = useContext(NotesContext);
    // const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        

        if ( body.length > 0) {
            addNote( body )
            console.log("new note added")
            navigate('/notes');
        }

    }


    return (
        <div className="create">
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit} >
             
                <label> Note body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                <button>Add Note</button>
                {/* {isPending && <button>Adding Note...</button>} */}
            </form>
        </div>
    );
}

export default Create;