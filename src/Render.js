import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderUI = (State, newMessage, newPost, newPostWrighting, updateMessageText) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App State={State} 
             newMessage={newMessage} 
             newPost={newPost} 
             newPostWrighting={newPostWrighting}
             updateMessageText={updateMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};