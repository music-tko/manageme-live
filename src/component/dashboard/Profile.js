// import { app } from "../base";
import { Navigate } from "react-router-dom"
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import firebase from "firebase";

const Profile = () => {
    const currentUser = useContext(UserContext);
    const handleSignOut = () =>{
        firebase.auth().signOut().then(() =>{
            <Navigate to="/login" />
        }) .catch((error) =>{
            console.log('error occured', error);
            <p>Error Logging Out</p>
        })
    }

    return ( 
        <div >
            <h1>Profile</h1>
            <div className="profiling">
            { currentUser &&<> <h3>Good day {currentUser.displayName ? currentUser.displayName : currentUser.email}, I hope you enjoy looking around and using the available features. -T :)</h3>
            </>}

            <button onClick={handleSignOut}>Sign Out</button>      
        </div>
      </div>
     );
}
 
export default Profile;
