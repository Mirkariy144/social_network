import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderUI = () => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App State={store.getState()} 
             dispatch={store.dispatch.bind(store)} 
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderUI(store.getState());

store.subscriber(rerenderUI);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
