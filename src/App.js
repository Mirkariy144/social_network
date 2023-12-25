import React from 'react';
import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import Loader from './components/Loader/Loader';
import { Layout } from './components/Layout/Layoyt';
import { useAuth } from './React/CustomHooks/CustomHooks';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserPageContainer from './components/Users/UserPage/UserPageContainer';
import UsersListContainer from './components/Users/UsersContainerHook';
import LoginContainer from './components/Login/LoginContainer';


const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
          <div className={c.appWrapper}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/profile/:id" element={<Content />} />
                  <Route path="/messages/" element={<DialogsContainer />} />
                  <Route path="/users/" element={<UsersListContainer />} />
                  <Route path="/users/:id" element={<UserPageContainer />} />
                </Route>
                <Route path="/login" element={<LoginContainer />} />
              </Routes>
          </div>
  );
};

export default App;
