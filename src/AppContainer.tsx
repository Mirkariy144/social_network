import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './React/customHooks/CustomHooks';
import store from './redux/reduxStore';
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
