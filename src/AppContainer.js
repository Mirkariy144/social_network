import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import c from './App.module.css';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainerHook';
import UserPageContainer from './components/Users/UserPage/UserPageContainer';
import LoginContainer from './components/Login/LoginContainer';
import Loader from './components/Loader/Loader';
import { useAuth } from './React/CustomHooks/CustomHooks';
import { Layout } from './components/Layout/Layoyt';
import { Provider } from 'react-redux';
import { AuthProvider } from './React/CustomHooks/CustomHooks';
import store from './Redux/reduxStore';
import App from './App';

const AppContainer = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppContainer;
