import Home from './component/Home';
import './index.css';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/layout/Footer';
import Signup from './component/auth/Signup';
import SignIn from './component/auth/SignIn';
import SignedInLinks from './component/layout/SignedInLinks';
import Pomodoro from "./component/pomodoro/Pomodoro";
// import Dashboard from "./component/dashboard/Dashboard";
import ToDo from './component/todos/ToDo';
import NoteCreate from "./component/notes/NoteCreate";
import NoteDetails from './component/notes/NoteDetails';
import NotesList from "./component/notes/NotesList"
import Profile from './component/dashboard/Profile'
import PrivateRoute from './component/layout/PrivateRoute';
import { UserContext } from './component/UserContext';
import SignedOutLinks from "./component/layout/SignedOutLinks"; 

function App() {

        const currentUser = useContext(UserContext);


  return (
      <div className="App">

 
            
         <BrowserRouter>
       { currentUser ? <SignedInLinks /> : <SignedOutLinks />}
         <Routes>
         <Route path='/' element={<Home />} />
        
         <Route path='/register' element={<Signup />} />
         
         <Route path='/login' element={<SignIn />} />
         </Routes>
         
         <Routes>
         <Route path='/dashboard' element={<Profile />}>
         <Route element={<PrivateRoute />}/>
         </Route>
         </Routes>

        <Routes>
         <Route path='/pomodoro' element={<Pomodoro defaultBreakLength='5' 
         defaultSessionLength='25'/>} >
          <Route element={<PrivateRoute />}/>
         </Route>
         </Routes>
        
        <Routes>
         <Route path='/to-do' element={<ToDo />}>
        <Route element={<PrivateRoute />}/>
         </Route>
         </Routes> 
        
        <Routes>
         <Route path='/notes-create' element={<NoteCreate />}>
         <Route element={<PrivateRoute />}/>
         </Route>
         </Routes>

        <Routes>
         <Route path='/notes/:id' element={<NoteDetails />}>
       <Route element={<PrivateRoute />}/>
         </Route>
         </Routes>

         <Routes>
         <Route path="/notes" element={<NotesList/>}>
       <Route element={<PrivateRoute />}/>
         </Route>
         </Routes>

         <Footer />
        
         </BrowserRouter>

      </div>     
      
  );
}

export default App;
