import React from "react";
import { NavLink } from "react-router-dom";
import c from "./NameList.module.css"

const NameList = () => {
  return (
    <div className={c.ChatSelector}>
      <div className={c.Name}>
        <NavLink to='Jojo'>Jovani_Gorgo</NavLink>
      </div>
      <div className={c.Name}>
        <NavLink to='OhKurwa'>Kurwa</NavLink>
      </div>
      <div className={c.Name}>
        <NavLink to='Reference'>Jojo</NavLink>
      </div>
      <div className={c.Name}>
        <NavLink to='Z-Patriot'>Z-Borned</NavLink>
      </div>
    </div>
  );
};

export default NameList;