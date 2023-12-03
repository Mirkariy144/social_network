import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { redirect } from 'react-router-dom';

import c from './navBar.module.css';
import Loader from '../Loader/Loader';

const NavBar = () => {

  const id = useSelector(state => state.Auth.id);

  return (
    <div className={c.appNavBar}>
      <div className={c.item}>
        <NavLink to={id?`profile/${id}`:'login'}>Профиль</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={id?'news':'login'}>Новости</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={id?'messages':'login'}>Сообщения</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={id?'friends':'login'}>Друзья</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to={id?'users':'login'}>Пользователи</NavLink>
      </div>
    </div>
  );
};

  export default NavBar;