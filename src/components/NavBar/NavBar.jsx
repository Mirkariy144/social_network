import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import c from './navBar.module.css';
import Loader from '../Loader/Loader';

const NavBar = () => {

  const id = useSelector(state => state.Auth.id);

  if (!id) {
    return <Loader />;
  }
  return (
    <div className={c.appNavBar}>
      <div className={c.item}>
        <NavLink to={`profile/${id}`}>Профиль</NavLink>
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