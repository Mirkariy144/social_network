import React from 'react';
import { Link } from 'react-router-dom';

import c from './navBar.module.css';

const NavBar = () => {
    return (
    <div className={c.appNavBar}>
      <div className={c.item}>
        <Link to="/profile">Профиль</Link>
      </div>
      <div className={c.item}>
        <Link to="/news">Новости</Link>
      </div>
      <div className={`${c.item} ${c.active}`}>
        <Link to="/dialogs">Сообщения</Link>
      </div>
      <div className={c.item}>
        <Link to="/friends">Друзья</Link>
      </div>
    </div>
    );
  };

  export default NavBar;