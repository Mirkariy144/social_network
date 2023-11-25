import { configureStore } from '@reduxjs/toolkit'
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";
// import UsersReducer from './UsersReducer';


let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer,
    // Users: UsersReducer,
  }
});

window.store = store;

export default store;