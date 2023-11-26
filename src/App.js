import React from 'react';
import {Route, Routes} from 'react-router-dom'
import c from './App.module.css';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainerHook';
import UserPageContainer from './components/Users/UserPage/UserPageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBarConnect from './components/NavBar/NavBar';


const App = () => {
  return (
      <div className={c.appWrapper}>
        <HeaderContainer />
        <NavBarConnect />
        <Routes>
          <Route path='/dialogs/' element={<DialogsContainer />}  />
          <Route path='/profile/:id' element={<Content />} />
          <Route path='/users/' element={<UsersContainer />} />
          <Route path='/users/:id' element={<UserPageContainer />} />
        </Routes>
      </div>
  );
}

export default App;