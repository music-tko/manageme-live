import About from './homeset/About'
import Testimonials from "./homeset/Testimonials"
import Footer from './layout/Footer'

const Home = () => {
    return ( 
        <div>
          <header>
          <div className="bg-img">
          <div className="bg-text">
               <h1>Welcome To ManageMe</h1>
               <p className="header-text">Making your Life Easier To Plan</p>
             <div className="home-buttons">
               <button>Register</button>
               <button>Login</button>
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