import { createSlice } from '@reduxjs/toolkit';
import { baseState } from './data';

interface MessagesReduserState {
  Characters: {
    id: number;
    name: string;
  }[];
  Message: {
    id: number;
    text: string;
  }[];
}

let charactersID: number = 0;
let messagesID: number = 0;

let initialState: MessagesReduserState = {
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
    addNewMessage: (state: { Message: { id: number }[]}, data: { payload: { newMessage: string }}) => {
      let newMessagePush = {
        id: state.Message.length,
        text: data.payload.newMessage,
      };
      state.Message.push(newMessagePush);
    },
  },
});

export const { addNewMessage } = MessagesReducer.actions;

export default MessagesReducer.reducer;
