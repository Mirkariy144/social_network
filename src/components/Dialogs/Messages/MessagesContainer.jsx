import {
  addNewMessage,
  modifyMessageContent,
} from '../../../Redux/MessagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    Messages: state.Messages.Message,
    updateMessageInput: state.Messages.updateMessageInput,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addNewMessage());
    },
    newMessageChange: (message) => {
      dispatch(modifyMessageContent(message));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
