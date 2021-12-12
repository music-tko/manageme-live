import React, { useContext, useCallback } from 'react';
import { GoogleAuth } from './GoogleAuth';
import { UserContext } from '../UserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { app } from '../base';

const Login = () => {

  let navigate = useNavigate()   
    const { currentUser } = useContext(UserContext);
    const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        navigate("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
   )  
  
    if (currentUser) {
    return <Navigate to="/dashboard" />;
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