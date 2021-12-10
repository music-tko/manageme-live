  import { useState } from 'react';
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleAction = (id) => {
    console.log(id)
  }
    return ( 
    <div className="login">
    <h1>Login</h1>
   <div id="log-in">
    <form action="post" id="login">
               <div className="profile-login">
            <label htmlFor="Email" id="email">
            <p>Email:</p>
            </label>
            <input type="email" name="email" id="signup-email" onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor="Password" id="password">
            <p>Password: </p>
            </label>
            <input type="password" name="password" id="signup-password" onChange={(e) => setPassword(e.target.value)}/>
            <button id="submit-login" onClick={handleAction} handleAction={handleAction}> Login </button>

        </div>
    </form>
        </div>
    </div> 
    
    );
}
 
export default Login;