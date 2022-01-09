import firebase from 'firebase'
import { app } from "../base";

export const GoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const authWithGoogle = () =>{
        app.auth().signInWithPopup(provider)
    }
    return <div>
    <button className="google-btn" onClick={authWithGoogle}> Login With Google </button></div>
}