import { Link } from "react-router-dom";

const Notes = ({ notes, title }) => {
     return (
        <div className="notes">
        <div className="adding">
        <h2>{ title }</h2>
        <Link to="/notes-create"><button className="note-add">+</button></Link>
        </div>
        {notes && notes.map((note) => (
        <div className="note-preview" key={note.id}>
        <Link to={`/notes/${note.id}`}>
           <h2 className="note-title">{ note.title }</h2>
           </Link>
        </div>
        ))}
        </div>
    );
}

export default Notes