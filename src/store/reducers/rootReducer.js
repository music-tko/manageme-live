import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import noteReducer from "./NoteReducer";
// import { firebaseReducer } from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer
})

export default rootReducer