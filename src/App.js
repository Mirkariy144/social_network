import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

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