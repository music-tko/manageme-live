// import React, { useCallback } from "react";
import { GoogleAuth } from './GoogleAuth';
import { useNavigate } from 'react-router-dom';
import { app } from '../base';

const Register = () => {
    let navigate = useNavigate();
    
      const handleSignUp = async e => {
          e.preventDefault();
            const { email, password } = e.target.elements;
              try {
                await app.auth().createUserWithEmailAndPassword(email.value, password.value);
                navigate('/dashboard');
              } catch(error){
                alert(error)
              }
        }
     

  
    return ( 
        <div className="register"> 
        
        <h1>Sign Up</h1>
        <div id="reg">
        <form action="get" id="signup" onSubmit={handleSignUp}>
        <div className="profile">
            <label htmlFor="Email" id="email">
            <p>Email:</p>
            </label>
            <input type="email" name="email" id="signup-email"  />
            
            <label htmlFor="Password" id="password">
            <p>Password: </p>
            </label>
            <input type="password" name="password" id="signup-password" />
           
        </div>
        <button id="submit-signup" >Create Account</button>
       <p> or </p>
        <GoogleAuth />
        
        </form>
         
        </div>
        </div>
     );
}
 
export default Register;