import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const NotesContext = createContext();

export const NotesProvider = (props) => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    const addNote = ( body) => {
        //console.log(`ADD note`);
        setNotes([...notes, { id: uuidv4(), body: body }]);
    };

    const deleteNote = (id) => {
        //console.log(`DELETE note with id: ${id}`);
        setNotes(notes.filter((note) => note.id !== id));
    };

    const editNote = ( body, id) => {
        //console.log(`EDIT note with id: ${id}`);
        let updatedNotes = notes.map((note) => (note.id === id ? { ...note, body } : note))
        setNotes(updatedNotes);
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NotesContext.Provider>
    );
};

