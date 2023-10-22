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
      let newMessagePush = {
        text: state.updateMessageInput,
      };
  
      state.Message.push(newMessagePush)
      state.updateMessageInput = ('');
    },
      
    modifyMessageContent: (state, action) => {
      state.updateMessageInput = action.payload;
    },
    
  }
});

export const {addNewMessage, modifyMessageContent } = MessagesReducer.actions;

export default MessagesReducer.reducer;