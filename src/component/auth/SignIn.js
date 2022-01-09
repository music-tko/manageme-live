// import React, { useCallback } from "react"
import { GoogleAuth } from './GoogleAuth';
import { useNavigate } from 'react-router-dom';
import { app } from '../base';

const Login = () => {

    let navigate = useNavigate()   


    // const handleValidation = () =>{

    // }

  const handleLogin = 
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await
          app.auth().signInWithEmailAndPassword(email.value, password.value);
        navigate("/dashboard");
      } catch (error) {
        alert(error);
      }
    }
   
      
  return ( 
    <div className="login">
    <h1>Login</h1>
   <div id="log-in">
    <form action="post" id="login" onSubmit={handleLogin}>
               <div className="profile-login">
            <label htmlFor="Email" id="email">
            <p>Email:</p>
            </label>
            <input type="email" name="email" id="signup-email"/>
            
            <label htmlFor="Password" id="password">
            <p>Password: </p>
            </label>
            <input type="password" name="password" id="signup-password" />
            <button id="submit-login" > Login </button>
            <p>or</p>
            <GoogleAuth />
          
        </div>
        
    </form>
        </div>
    </div> 
    
    );
}
 
export default Login;