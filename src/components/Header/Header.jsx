import React from "react";
import c from './Header.module.css';
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";

const Header = ({authUser}) => {
	return (
			<div className={c.appHeader}>
				<img src='https://avatars.mds.yandex.net/i?id=9e935d9a791083dc250d6a14801ab3aac7276b15-10521504-images-thumbs&n=13' />
        {authUser.login?
				<div className={c.login}>
					<div>{authUser?authUser.login:''}</div>
					<div>{authUser?authUser.email:''}</div>
				</div>:
        <div className={c.login}>
          <NavLink to='/login'>Login</NavLink>
        </div>
        }
			</div>
	);
};

export default Header