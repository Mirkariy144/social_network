import React from "react";
import c from "./NameList.module.css"

const NameList = () => {
  return (
    <div className={c.ChatSelector}>
      <div className="Name">Jovani Gorgo</div>
      <div className="Name">Kurwa</div>
      <div className="Name">Jojo</div>
      <div className="Name">Z-Borned</div>
    </div>
  );
};

export default NameList;