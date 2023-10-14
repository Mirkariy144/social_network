import React from "react";
import NameList from "./NameList/NameList";
import Messages from "./Messages/Messages";
import c from "./Dialog.module.css"

const Dialogs = (props) => {
  console.log(props)
  return (
    <div className={c.wrapper}>
        <NameList 
        Characters={props.Messages.Characters}
        />
        <Messages 
        Message={props.Messages.Message} 
        newMessage={props.newMessage}
        updateMessageText={props.updateMessageText}
        />
    </div>
  );
};

export default Dialogs