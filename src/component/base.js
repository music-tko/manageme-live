// import {initializeApp}  from 'firebase/app'
import firebase from "firebase/app";
import 'firebase/auth';

export const app = firebase.initializeApp({
  "projectId": "webloginme",
  "appId": "1:584535184924:web:b5a80da14aad9e7b72f1d9",
  "storageBucket": "webloginme.appspot.com",
  "apiKey": "AIzaSyA3n_Ps6DN0hQ1CuTl7D6vZKDc5H5oHlmw",
  "authDomain": "webloginme.firebaseapp.com",
  "messagingSenderId": "584535184924"
});

