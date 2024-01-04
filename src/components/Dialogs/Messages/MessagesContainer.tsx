import { addNewMessage } from '../../../redux/MessagesReducer';
import { AppStateType } from '../../../redux/reduxStore';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (state: AppStateType) => {
  return {
    Messages: state.Messages.Message,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (data: { newMessage: string }) => {
      dispatch(addNewMessage(data));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
