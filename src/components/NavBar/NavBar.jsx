import React from 'react';
import { NavLink } from 'react-router-dom';

import c from './navBar.module.css';

const NavBar = () => {
    return (
    <div className={c.appNavBar}>
      <div className={c.item}>
        <NavLink to="profile">Профиль</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="news">Новости</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="dialogs">Сообщения</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="friends">Друзья</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="users">Пользователи</NavLink>
      </div>
    </div>
    );
  };

  export default NavBar;