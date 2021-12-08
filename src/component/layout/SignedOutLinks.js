import React from 'react';
import { NavLink} from 'react-router-dom';
// import About from '../homeset/About';
// import Register from '../auth/Signup';
// import Login from '../auth/SignIn'


const SignOutLinks=()=>{
    return(
        <ul className="navBar-SignOut">
           <li><NavLink to='/register'>Signup</NavLink></li>
           <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks