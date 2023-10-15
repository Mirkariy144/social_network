import './index.css';
import reportWebVitals from './reportWebVitals';
import State, { newPostWrighting, subscriber, updateMessageText } from './Redux/State';
import { newMessage, newPost } from './Redux/State';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderUI = (State, newMessage, newPost, newPostWrighting, updateMessageText) => {
  
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

rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);

subscriber(rerenderUI);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
