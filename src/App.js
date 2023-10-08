import React from 'react';
import {Route, Routes} from 'react-router-dom'

import c from './App.module.css';

import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
      <div className={c.appWrapper}>
        <Header />
        <NavBar />
        <Routes>
          <Route path='dialogs/*' element={<Dialogs Characters={props.State.Characters}/>} />
          <Route path='profile/*' element={<Content Post={props.State.Post}/>} />
        </Routes>
      </div>
  );
}

export default App;