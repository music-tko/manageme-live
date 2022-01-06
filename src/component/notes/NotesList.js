import Notes from './Notes.js';
// import useFetch from "./useFetch.js";
import React, { useContext } from "react";
import { NotesContext } from "../NoteContext"
import { Link } from "react-router-dom";


const NotesList = () => {
    const { notes } = useContext(NotesContext);

    return (
        <div className="notes"> 
         <button className="adding"><Link to='/notes-create'> + </Link></button>
                {notes.map((note) => <Notes key={note.id} {...note} /> )}
        </div>
    )
}

export default NotesList;