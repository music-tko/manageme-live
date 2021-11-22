import Home from './component/Home';
import './index.css';
import ToDo from './component/todos/ToDo';
import NavBar from './component/layout/NavBar';

function App() {
  return (
      <div className="App">
         <NavBar />   
         <Home /> 
      </div>     
      
  );
}

export default App;
