import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";
import Button from "./Button";

let Users = ({Users, changeFollow}) => {

  let onFollowClick = (id) => {
    changeFollow(id)
  }

  let everyUser = Users.map(({Name, Country, City,Status, Followed, Avatar, id}) => {

    return (
      <div className={c.GridKurwa} key={id}>
        <div className={c.Extension} >
          <NavLink to={`/users/${id}`} >
            <img src={Avatar} className={c.MiniAvatar} />
          </NavLink>
          <Button id={id} title={Followed?'Unfollow':'Follow'} onClick={() => onFollowClick(id)} />
        </div>
        <div className={c.MainInfo}>
          <NavLink to={`/users/${id}`} className={c.item} >
            <div className={c.User} >
              <div className={c.Name}>
                {Name}
              </div>
              <div className={c.Country}>
                {Country}
              </div>
              <div className={c.City}>
                {City}
              </div>
              <div className={c.Status}> 
                {Status}
              </div> 
            </div>
          </NavLink>
        </div>
      </div>
    )
  });
      
  return (
      <div className={c.Container}>
        {everyUser}
      </div>
  )
};

export default Users