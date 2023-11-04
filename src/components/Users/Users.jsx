import React from "react";
import c from './Users.module.css'
import { NavLink } from "react-router-dom";

let Users = ({Users}) => {
  let everyUser = Users.map( ({Name, Country, City, Status, id}) => {
    return (
    <NavLink to={`/users/${id}`} key={id} className={c.item}>
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
  )});
      
  return (
      <div className={c.Container}>
        {everyUser}
      </div>
  )
}

export default Users