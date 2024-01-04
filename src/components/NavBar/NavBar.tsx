import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './navBar.module.css';

const NavBar = ({ id }: { id: number }) => {
  return (
    <div className={c.appNavBar}>
      <div className={c.item}>
        <NavLink to={`profile/${id}`}>Профиль</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={'messages'}>Сообщения</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={'users'}>Пользователи</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
