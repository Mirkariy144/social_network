import { configureStore } from '@reduxjs/toolkit'
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import AuthReducer from './AuthReducer';


let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer,
    Auth: AuthReducer,
  }
});

window.store = store;

export default store;