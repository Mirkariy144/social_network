import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    Characters: state.Messages.Characters
  }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer