import Notes from './Notes.js';
import useFetch from "./useFetch.js";


const Home = () => {
    const { data: notes, isPending, error} = useFetch('https://manageme-server.herokuapp.com/notes/')

    return ( 
        <div className="notes">
          { error && <div>{error}</div>}
          { isPending && <div class="lds-circle loading"><div></div></div>}
          {notes&& <Notes notes={notes} title="All Notes" />}
           </div>
    )
}
 
export default Home;