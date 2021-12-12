import React from "react";
import { NavLink, Link } from "react-router-dom";

const SignedInLinks = () => {
    return ( 
         <nav>
           <div>
             <ul className="mainNav">
               <li><Link to="/dashboard">ManageMe</Link></li>
             
           <li> <NavLink to='/to-do'>Todo</NavLink></li>
            <li><NavLink to='/notes'>Notes</NavLink></li>
            <li><NavLink to='/pomodoro'>Pomodoro</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <a href="#"><li>LogOut</li></a>
            </ul>
           </div>
        </nav>
      
     );
}
 
export default SignedInLinks;