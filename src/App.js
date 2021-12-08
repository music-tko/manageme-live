import Home from './component/Home';
import './index.css';
import NavBar from './component/layout/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/layout/Footer';
import Signup from './component/auth/Signup';
import SignIn from './component/auth/SignIn';
import Pomodoro from "./component/pomodoro/Pomodoro";
import Dashboard from "./component/dashboard/Dashboard";
import Notes from "./component/notes/Notes";
import ToDo from './component/todos/ToDo';
import NoteCreate from "./component/notes/NoteCreate";
import NoteDetails from './component/notes/NoteDetails';

function App() {
  return (
      <div className="App">
            
         <BrowserRouter>
         <NavBar />
         <Routes>
         <Route path='/' element={<Home />} />
         </Routes>
         <Routes>
         <Route path='/register' element={<Signup />} />
         </Routes>
         <Routes>
         <Route path='/login' element={<SignIn />} />
         </Routes>
         <Routes>
         <Route path='/pomodoro' element={<Pomodoro defaultBreakLength='5' 
  defaultSessionLength='25'/>} />
         </Routes>
          <Routes>
         <Route path='/dashboard' element={<Dashboard />} />
         </Routes>
         <Routes>
         <Route path='/notes' element={<Notes />} />
         </Routes>
         <Routes>
         <Route path='/to-do' element={<ToDo />} />
         </Routes>
         <Routes>
         <Route path='/notes-create' element={<NoteCreate />} />
         </Routes>
         <Routes>
         <Route path='/notes-details' element={<NoteDetails />} />
         </Routes>
         <Footer />
         </BrowserRouter>

      </div>     
      
  );
}

export default App;
