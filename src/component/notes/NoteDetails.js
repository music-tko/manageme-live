import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch.js";

const NoteDetails = () => {
  
        const { id } = useParams();
        const {data: note, error, isPending} = useFetch("https://manageme-server.herokuapp.com/notes/" + id)
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('https://manageme-server.herokuapp.com/notes/' + note.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/notes');
        })
    }

    return ( 
        <div className="note-details">
          {isPending && <div> Loading</div>}
          {error && <div>{error}</div>} 
          {note && 
          <article>
              <h2>{note.title}</h2>
              <div>
                  <p>{note.body}</p>
              </div>
              <button onClick={handleClick}>delete</button>
          </article>}           
        </div>
     );
// }  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
  
}
 
export default NoteDetails;