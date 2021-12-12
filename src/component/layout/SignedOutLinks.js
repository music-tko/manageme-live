import React from 'react';
import { NavLink, Link} from 'react-router-dom';

const SignOutLinks=()=>{
    return(
        <ul className="mainNav">
         <li><Link to="/">ManageMe</Link></li>
           <li><NavLink to='/register'>Signup</NavLink></li>
           <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks