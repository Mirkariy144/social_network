import React from "react";
import NameList from "./NameList/NameList";
import Messages from "./Messages/Messages";
import c from "./Dialog.module.css"

const Dialogs = () => {
  return (
    <div className={c.wrapper}>
        <NameList />
        <Messages />
    </div>
  );
};

export default Dialogs