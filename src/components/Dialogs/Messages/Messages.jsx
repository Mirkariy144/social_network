import React from "react";
import c from "./Messages.module.css"

const Messages = (props) => {
  
  let RenderMessage = props.Messages.map( ({id, text}) => <pre key={id}>{text}</pre> );

  let messageText = React.createRef();

  let sendMessage = () => {
      props.sendMessage()
  };

  let newMessageChange = () => {
    let message = messageText.current.value;
    props.newMessageChange(message)
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