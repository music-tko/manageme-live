import React from "react";
// import { Link } from "react-router-dom";

const SignedInLinks = () => {
    return ( 
        <ul className='navBar-SignIn'>
            <a href="#"><li>Todo</li></a>
            <a href="#"><li>Notes</li></a>
            <a href="#"><li>Calendar</li></a>
            <a href="#"><li>Budget</li></a>
            <a href="#"><li>Profile</li></a>
            <a href="#"><li>LogOut</li></a>
            {/* <li><Link to="">TK</Link></li> */}
        </ul>
     );
}
 
export default SignedInLinks;