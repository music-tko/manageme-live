import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import bin from "../img/bin.png";
import pen from "../img/pen.png"

const ToDo = () => {

    //State Changes
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [todoEdit, setTodoEdit] = useState(null);
    const [editText, seteditText] = useState('');
    const unique_id = uuid();

    //local Storage
    useEffect(() => {
    const tempvar =localStorage.getItem("todos")
    const loadedTodo = JSON.parse(tempvar)
    
    if(loadedTodo){
        setTodos(loadedTodo)
    }
   }, [])

    useEffect(() => {
       const tempvar = JSON.stringify(todos)
       localStorage.setItem("todos", tempvar)
    }, [todos])

    //Submits Todo

    const handleSubmit = (e) => {

        e.preventDefault();

        const newTodo = {
            id: unique_id,
            text: todo,
            completed: false,
        }

        
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

   //Deletes Todo

    function deleteTodo(id){
        console.log(id)
        const updatedTodos = [...todos].filter(todo => todo.id !== id)

        setTodos(updatedTodos)
    }
    

    //Complete Tasks
    function toggleComplete(id){
        const updatedTodos =[...todos].map((todo) => {
        if (todo.id === id){
            todo.completed = !todo.completed;
        } 
        return todo
      })

      setTodos(updatedTodos)
    }

    //Edits Todo
    
    function editTodo(id){
        const updatedTodos = [...todos].map((todo) => {
           if(todo.id === id){
               todo.text = editText
           }
           return todo
        })
        setTodos(updatedTodos)
        setTodoEdit(null)
        seteditText('')
        console.log(id)
    }

    return ( 
        <div className='todo'>
            <h2>To Do List</h2>
            <form onSubmit={handleSubmit} className="input-form">
                <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo} required/>
                <button type='submit'>Add To Do</button>
            </form>

            {todos.map((todo) => <div key={todo.id} className="tasks">
            <input 
            type="checkbox" 
            onChange={() => toggleComplete(todo.id)} checked={todo.completed} className="task-complete"/>
           
           {todoEdit === todo.id ? (<input 
            type="text" 
            onChange={(e) => seteditText(e.target.value)} value={todo.text}/>) 
            : (<div className={ todo.completed ? 'completed' : 'todo-text' } >{todo.text}</div>)}
            
            <div className="task-buttons">
            {todoEdit === todo.id ? (<button className="edit-button donebtn" onClick={() => editTodo(todo.id)}>Done</button>) :
            (<button className="edit-button" onClick={() => setTodoEdit(todo.id)}><img src={pen} alt="pen for editing"/></button>) }
             
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}><img src={bin} alt="bin for deleting" /></button>
             </div>
             </div>)}
           </div>
     );
}
 
export default ToDo;
