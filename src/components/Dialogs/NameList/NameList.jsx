import React from "react";
import { NavLink } from "react-router-dom";
import c from "./NameList.module.css"

const NameList = (props) => {

  let DialogsList = props.Characters.map( NameID => <div className={c.Name}><NavLink to={NameID.name}>{NameID.name}</NavLink></div>)

  return (
    <div className={c.ChatSelector}>
      {DialogsList}
    </div>
  );
};

export default NameList;