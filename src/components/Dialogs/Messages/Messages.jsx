import React from "react";
import c from "./Messages.module.css"
import { addNewMessage, modifyMessageContent } from "../../../Redux/MessagesReducer";

const Messages = (props) => {

  let RenderMessage = props.Message.map( Message => <div>{Message.text}</div> );

  let messageText = React.createRef();

  let sendMessage = () => {
      props.dispatch(addNewMessage())
  };

  let newMessageChange = () => {
    let message = messageText.current.value;
    props.dispatch(modifyMessageContent(message))
  };


  return (
    <div className={c.MessageText}>
      <div>  
        {RenderMessage}
      </div>
      <div>
        <textarea ref={messageText} onChange={newMessageChange} value={props.updateMessageInput || ''} placeholder="New message"/>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;