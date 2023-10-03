import React from 'react';
import c from './navBar.module.css';

const NavBar = () => {
    return (
    <div className={c.appNavBar}>
      <div className={c.item}>Профиль</div>
      <div className={c.item}>Новости</div>
      <div className={`${c.item} ${c.active}`}>Сообщения</div>
      <div className={c.item}>Друзья</div>
    </div>
    );
  };

  export default NavBar;