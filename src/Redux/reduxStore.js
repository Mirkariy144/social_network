import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";


let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer,
  },
  middleware: [thunk]
});

window.store = store;

export default store;