import React from 'react';
import {Route, Routes} from 'react-router-dom'
import c from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import UserPageContainer from './components/Users/UserPage/UserPageContainer'
import UserPageContainerClass from './components/Users/UserPage/UserPageContainerClass'


const App = () => {
  return (
      <div className={c.appWrapper}>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />}  />
          <Route path='/profile/*' element={<Content />} />
          <Route path='/users/*' element={<UsersContainer />} />
          <Route path='/users/:id' element={<UserPageContainerClass />} />
        </Routes>
      </div>
  );
}

export default App;