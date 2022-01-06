import React, { useContext } from 'react'
import { NotesContext } from "../NoteContext"

const Notes = (props) => {
   const {body, id } = props;
     const { deleteNote } = useContext(NotesContext);

   return (
      <div className="notes-details">
         {/* <div className="note-rows"> */}
            <div className="notes-card" key={id}>
               <p className="notes-body">{body}</p>
               <button className="delete-btn" onClick={() => {deleteNote(id);}}>Delete</button>
            </div>
         {/* </div> */}
      </div>
   );
}

export default Notes