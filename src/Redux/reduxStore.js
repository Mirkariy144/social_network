import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import { reducer as formReducer } from 'redux-form';

let store = configureStore({
  reducer: {
    ShitPosts: ProfilePageReducer,
    Messages: MessagesReducer,
    form: formReducer,
  },
  middleware: [thunk]
});

window.store = store;

export default store;