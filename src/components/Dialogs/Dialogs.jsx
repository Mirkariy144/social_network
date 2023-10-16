import React from "react";
import NameList from "./NameList/NameList";
import Messages from "./Messages/Messages";
import c from "./Dialog.module.css"

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
        <NameList 
        Characters={props.Messages.Characters}
        />
        <Messages 
        updateMessageInput={props.Messages.updateMessageInput}
        Message={props.Messages.Message} 
        dispatch={props.dispatch}
        />
    </div>
  );
};

export default Dialogs