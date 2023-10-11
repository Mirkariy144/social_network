import React from "react";
import c from "./Messages.module.css"

const Messages = (props) => {

  let RenderMessage = props.Message.map( Message => <div>{Message.text}</div> );

  let messageText = React.createRef();

  let sendMessage = () => {
      let message = messageText.current.value;
      props.newMessage(message);
  };

  return (
    <div className={c.MessageText}>
      <div>  
        {RenderMessage}
      </div>
      <div>
        <textarea ref={messageText}></textarea>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;