import './index.css';
import reportWebVitals from './reportWebVitals';
import State, { newPostWrighting, updateMessageText } from './Redux/State';
import { newMessage, newPost } from './Redux/State';
import { rerenderUI } from './Render';

rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
