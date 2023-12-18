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
};

export const MessagesReducer = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    addNewMessage: (state, data) => {
      let newMessagePush = {
        id: state.Message.length,
        text: data.payload.newMessage,
      };
      state.Message.push(newMessagePush);
    },
  },
});

export const { addNewMessage, modifyMessageContent } = MessagesReducer.actions;

export default MessagesReducer.reducer;
