import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const NavBar = () => {
    return (  
        <nav>
           <div>
             <ul className="mainNav">
               <li><Link to="/">ManageMe</Link></li>
               <li className="links"><SignedInLinks /></li>
               <li className="links"><SignedOutLinks /></li>
            </ul>
           </div>
        </nav>
    );
}
 
export default NavBar;