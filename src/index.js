import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './component/UserContext'
import { NotesProvider } from "./component/NoteContext"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
