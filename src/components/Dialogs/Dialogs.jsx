import React from "react";
import NameList from "./NameList/NameList";
import c from "./Dialog.module.css"
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
  return (
    <div className={c.wrapper}>
        <NameList Characters={props.Characters} />
        <MessagesContainer />
    </div>
  );
};

export default Dialogs