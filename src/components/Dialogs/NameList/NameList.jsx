import React from "react";
import { NavLink } from "react-router-dom";
import c from "./NameList.module.css"

const NameList = (props) => {

  let DialogsList = props.Characters.map( ({id, name}) => (
    <div className={c.Name} key={id} >
      <NavLink to={name}>{name}</NavLink>
    </div>
  ));

  return (
    <div className={c.ChatSelector}>
      {DialogsList}
    </div>
  );
};

export default NameList;