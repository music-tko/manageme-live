import { Link } from "react-router-dom";

const Notes = ({ notes, title }) => {
    // const notes = props.notes;
    // const title = props.title;

     return (
        <div className="blogs">
        <h2>{ title }</h2>
        {notes && notes.map((note) => (
        <div className="blog-preview" key={note.id}>
        <Link to={`/notes/${note.id}`}>
           <h2>{ note.title }</h2>
           </Link>
           {/* <button onClick={() => handleClick(note.id)}>delete note</button>  */}
        </div>
        ))}
        </div>
    );
}

export default Notes