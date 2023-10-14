import React from "react";
import c from "./Messages.module.css"

const Messages = (props) => {
  console.log(props)

  let RenderMessage = props.Message.map( Message => <div>{Message.text}</div> );

  let messageText = React.createRef();

  let sendMessage = () => {
      props.newMessage();
      // props.updateMessageText('');
  };

  let newMessageChange = () => {
    let message = messageText.current.value;
    props.updateMessageText(message);
  };

  return (
    <div className={c.MessageText}>
      <div>  
        {RenderMessage}
      </div>
      <div>
        <textarea ref={messageText} onChange={newMessageChange} value={props.updateMessageInput} />
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;