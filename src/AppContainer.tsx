import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './react/customHooks/CustomHooks';
import store from './redux/reduxStore';
import App from './App';

const AppContainer = () => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default AppContainer;
