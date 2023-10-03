import React from 'react';
import './App.css';
import NavBar from './html/NavBar';
import Header from './html/Header';
import Content from './html/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;