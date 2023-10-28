import { configureStore } from '@reduxjs/toolkit'
// import { createStore }  from "redux"
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";

// let reducers = combineReducers({
//   ShitPosts: ProfilePageReducer,
//   Messages: MessagesReducer
// });

let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer
  }
});

window.store = store;
// let store = createStore();

export default store;