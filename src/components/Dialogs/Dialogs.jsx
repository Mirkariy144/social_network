import React, { useEffect } from "react";
import NameList from "./NameList/NameList";
import c from "./Dialog.module.css"
import MessagesContainer from "./Messages/MessagesContainer";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
        <NameList Characters={props.Characters} />
        <MessagesContainer />
    </div>
  );
};

export default Dialogs