import React, { useState } from 'react';

const Register = () => {
    
      const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleAction = (id) => {
    console.log(id)
  }

  const handleClick = (e) =>{
    e.preventDefault();
    console.log("crisis evaded")
  }
    return ( 
        <div className="register"> 
        
        <h1>Sign Up</h1>
        <div id="reg">
        <form action="get" id="signup">
        <div className="identity">
          <label htmlFor="Name" id="name"> 
          <p>Name:</p>
            <input type="text" name="name" id="signup-name" />
          </label>
          <label htmlFor="Surname" id="surname">
          <p>Surname:</p>
            <input type="text" name="surname" id="signup-surname" />
            </label>
        </div>
        <div className="profile">
            <label htmlFor="Email" id="email">
            <p>Email:</p>
            </label>
            <input type="email" name="email" id="signup-email"  onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor="Password" id="password">
            <p>Password: </p>
            </label>
            <input type="password" name="password" id="signup-password"  onChange={(e) => setPassword(e.target.value)}/>
           
        </div>
        <button id="submit-signup" onClick={handleAction} handleAction={handleAction}>Create Account</button>
        </form>
        </div>
        </div>
     );
}
 
export default Register;