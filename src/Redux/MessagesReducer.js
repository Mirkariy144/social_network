import {createSlice} from '@reduxjs/toolkit'

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
    updateMessageInput: '',
}

export const MessagesReducer = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    addNewMessage: (state) => {
      let stateChanger = {
        ...state,
        Message: [...state.Message],
      };

      let newMessagePush = {
        text: stateChanger.updateMessageInput,
      };
  
      stateChanger.Message.push(newMessagePush);
      stateChanger.updateMessageInput = ('');
      return stateChanger;
    },
      
    modifyMessageContent: (state, action) => {
      let stateChanger = {...state};
      stateChanger.updateMessageInput = action.payload;
      return stateChanger;
    },
    
  }
});

export const {addNewMessage, modifyMessageContent } = MessagesReducer.actions;

export default MessagesReducer.reducer;