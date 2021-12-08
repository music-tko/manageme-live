const Login = () => {
    return ( 
    <div className="login">
    <h1>Login</h1>
   <div id="log-in">
    <form action="post" id="login">
               <div className="profile-login">
            <label htmlFor="Email" id="email">
            <p>Email:</p>
            </label>
            <input type="email" name="email" id="signup-email" />
            
            <label htmlFor="Password" id="password">
            <p>Password: </p>
            </label>
            <input type="password" name="password" id="signup-password" />
            <input type="submit" value="Login" id="submit-login" />

        </div>
    </form>
        </div>
    </div> 
    
    );
}
 
export default Login;