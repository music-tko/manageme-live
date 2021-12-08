import About from './homeset/About';
import Testimonials from "./homeset/Testimonials";
import Footer from './layout/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

 let navigate = useNavigate();

 const handleRegister = () =>{
   navigate("/register");
 }

 const handleLogin = () =>{
   navigate("/login");
 }

    return ( 
        <div>
          <header>
          <div className="bg-img">
          <div className="bg-text">
               <h1>Welcome To ManageMe</h1>
               <p className="header-text">Making your Life Easier To Plan</p>
             <div className="home-buttons">
              <button className="home-button" onClick={handleRegister}>Register</button>
               <button className="home-button" onClick={handleLogin}>Login</button>
             </div>
          </div>
          </div>    
          </header>
          <About />
          <Testimonials />
          <Footer />
        </div>
     );
}
 
export default Home;