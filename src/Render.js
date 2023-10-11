import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

export let rerenderUI = (State, newMessage, newPost) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App State={State} newMessage={newMessage} newPost={newPost}/>
      </BrowserRouter>
    </React.StrictMode>
  );
};