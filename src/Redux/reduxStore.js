import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import AuthReducer from './AuthReducer';


let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer,
    Auth: AuthReducer,
  },
  middleware: [thunk]
});

window.store = store;

export default store;