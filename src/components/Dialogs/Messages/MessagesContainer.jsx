import React from "react";
import { addNewMessage, modifyMessageContent } from "../../../Redux/MessagesReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

  let sendMessage = () => {
      props.store.dispatch(addNewMessage())
  };

  let newMessageChange = (message) => {
    props.store.dispatch(modifyMessageContent(message))
  };


  return (
    <Messages newMessageChange={newMessageChange}
              sendMessage={sendMessage}
              Message={props.store.getState().Messages.Message}
              updateMessageInput={props.store.getState().Messages.updateMessageInput} />
    );
};

export default MessagesContainer;