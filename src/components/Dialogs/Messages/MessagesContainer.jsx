import React from "react";
import { addNewMessage, modifyMessageContent } from "../../../Redux/MessagesReducer";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";

const MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer> 
    {
      (store) => {

      let sendMessage = () => {
        store.dispatch(addNewMessage())
      };
    
      let newMessageChange = (message) => {
        store.dispatch(modifyMessageContent(message))
      };

        return (
        <Messages newMessageChange={newMessageChange}
                  sendMessage={sendMessage}
                  Message={store.getState().Messages.Message}
                  updateMessageInput={store.getState().Messages.updateMessageInput} />
        )
      }
    }
    </StoreContext.Consumer>  
  );
};

export default MessagesContainer;