import React from "react";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          return (
            <Dialogs Characters={store.getState().Messages.Characters} />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer