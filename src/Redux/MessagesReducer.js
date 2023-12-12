import { createSlice } from '@reduxjs/toolkit';
import { baseState } from './data';

let charactersID = 0;
let messagesID = 0;

let initialState = {
  Characters: baseState.Characters.map((item) => ({
    ...item,
    id: charactersID++,
  })),
  Message: baseState.Message.map((item) => ({ ...item, id: messagesID++ })),
  updateMessageInput: '',
};

export const MessagesReducer = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    addNewMessage: (state) => {
      let newMessagePush = {
        id: state.Message.length,
        text: state.updateMessageInput,
      };
      state.Message.push(newMessagePush);
      state.updateMessageInput = '';
    },

    modifyMessageContent: (state, action) => {
      state.updateMessageInput = action.payload;
    },
  },
});

export const { addNewMessage, modifyMessageContent } = MessagesReducer.actions;

export default MessagesReducer.reducer;
