import Notes from './Notes.js';
import useFetch from "./useFetch.js";


const Home = () => {
    const { data: notes, isPending, error} = useFetch('http://localhost:3002/notes/')
    /*const [name, setName] = useState("mario");

    const handleClick = () => {
        setName("luigi");
    }*/

    // const [name, setName] = useState('mario')

    // const handleDelete = (id) => {
    //     const newNotes = notes.filter(note => note.id !== id);
    //     setNotes(newNotes);
    // }
    // console.log(notes)

    return ( 
        <div className="notes">
          { error && <div>{error}</div>}
          { isPending && <div>Loading...</div>}
          {notes&& <Notes notes={notes} title="All Notes" />}
           </div>
    )
}
 
export default Home;