import React from 'react';
import c from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

<<<<<<< Updated upstream
const App = () => {
=======
const App = (props) => {
>>>>>>> Stashed changes
  return (
    <div className={c.appWrapper}>
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;