import React, { useState, useEffect} from 'react'
import firebase from 'firebase'
import { app } from "../base";

export const GoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const authWithGoogle = () =>{
        firebase.auth().signInWithPopup(provider)
    }
    return <div>
    <button className="google-btn" onClick={authWithGoogle}> Login With Google </button></div>
}