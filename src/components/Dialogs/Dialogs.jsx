import React from "react";
import NameList from "./NameList/NameList";
import Messages from "./Messages/Messages";
import c from "./Dialog.module.css"

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
        <NameList Characters={props.Characters}/>
        <Messages />
    </div>
  );
};

export default Dialogs