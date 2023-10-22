const newMessageType = 'NEW-MESSAGE';
const newMessageWrightingType = 'NEW-MESSAGE-TEXT';

let initialState = {
    Characters: [
      { name: 'Jovani Jorgo' },
      { name: 'Veronika' },
      { name: 'Selester' },
      { name: 'Yoba Kot' },
      { name: 'Kirasa' },
      { name: 'MBT 80' },
    ],
    Message: [
      { text: 'I love you' },
      { text: 'Just try to make my future' },
      { text: 'Can you help me, JS?' },
    ],
    updateMessageInput: [

    ],
}

const MessagesReducer = (state = initialState, action) => {
  switch (action.type){
    case newMessageType:
      let newMessagePush = {
        text: state.updateMessageInput,
      };
  
      state.Message.push(newMessagePush)
      state.updateMessageInput = ('');
      return state;
    case newMessageWrightingType:
      state.updateMessageInput = action.letter;
      return state;
    default: 
      return state;
  }
};

export const newMessageActionCreator = () => {
  return {
    type: newMessageType
  };
};

export const newMessageTextActionCreator = (message) => {
  return {
    type: newMessageWrightingType, letter: message
  };
};

export default MessagesReducer;