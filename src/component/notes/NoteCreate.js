const NoteCreate = () => {
        // const[title, setTitle] = useState("");
        // const[body, setBody] = useState("");
        // // const[isPending, setIsPending] = useState(false);
        // // const history = useHistory();
        
    
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             const blog = {title, body};
    
//             setIsPending(true);      
    
//             // fetch('http://localhost:8000/blogs', {
//             //     method: "POST",
//             //     headers: {'Content-Type': 'application/json'},
//             //     body: JSON.stringify(blog)
//             // }).then(() => {
//             // console.log("new blog added");
//             // setIsPending(false);
//             // history.push('/');
//             // })
    
            
//         }
    
    
//         return ( 
//             <div className="create">
//                 <h2>Add a New Note</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label> Note title:</label>
//                     <input 
//                     type="text" 
//                     required
//                     value = {title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <label> Note content:</label>
//                      <textarea
//                      required
//                      value = {body}
//                     onChange={(e) => setBody(e.target.value)}
//                     >
//                      </textarea>
// {/*             
//                      { !isPending && <button>Add Blog</button>}
//                      {isPending && <button>Adding Blog...</button>} */}
//                 </form>
//             </div>
//      );
  return (
      <div>
          <h2>create</h2>
      </div>
  )

}
 
export default NoteCreate;