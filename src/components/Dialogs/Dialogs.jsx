import React from "react";
import NameList from "./NameList/NameList";
import c from "./Dialog.module.css"
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
        <NameList Characters={props.store.getState().Messages.Characters} />
        <MessagesContainer store={props.store} />
    </div>
  );
};

export default Dialogs