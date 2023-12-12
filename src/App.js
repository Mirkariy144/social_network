import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainerHook';
import UserPageContainer from './components/Users/UserPage/UserPageContainer';
import LoginContainer from './components/Login/LoginContainer';
import Loader from './components/Loader/Loader';
import { useAuth } from './React/CostomHooks/CastomHooks';
import { Layout } from './components/Layout/Layoyt';

const App = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={c.appWrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dialogs/" element={<DialogsContainer />} />
          <Route path="/profile/:id" element={<Content />} />
          <Route path="/messages/" element={<DialogsContainer />} />
          <Route path="/users/" element={<UsersContainer />} />
          <Route path="/users/:id" element={<UserPageContainer />} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
};

export default App;
