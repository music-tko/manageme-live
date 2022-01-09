import Notes from './Notes.js';
// import useFetch from "./useFetch.js";
import React, { useContext } from "react";
import { NotesContext } from "../NoteContext"
import { Link } from "react-router-dom";


const NotesList = () => {
    const { notes } = useContext(NotesContext);

    return (
        <div className="notes"> 
         <button className="adding"><Link to='/notes-create' className="add-p">+ Add</Link></button>
         <br />
         <div className="note-sect">
                {notes.map((note) => <Notes key={note.id} {...note} /> )}
        </div>
        </div>
    )
}

export default NotesList;