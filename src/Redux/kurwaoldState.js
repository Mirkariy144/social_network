import MessagesReducer from "./MessagesReducer";
import ProfilePageReducer from "./ProfilePageReducer";

let store = {
  _State: {
    Messages: {
      Characters: [
        { name: 'Jovani Jorgo' },
        { name: 'Veronika' },
        { name: 'Selester' },
        { name: 'Yoba Kot' },
        { name: 'Kirasa' },
        { name: 'MBT 80' },
      ],
      Message: [
        { text: 'I love you' },
        { text: 'Just try to make my future' },
        { text: 'Can you help me, JS?' },
      ],
      updateMessageInput: [
  
      ],
    },
    ShitPosts: {
      Post: [
        { text: 'Hey, bitch' },
        { text: 'get out' },
        { text: '.map' },
        { text: 'kurwa' },
        { text: 'props' },
      ],
  
      newPostLetter: [
  
      ],
    },
  },

  getState() {
    return this._State;
  },

  _callSubscriber() {
    console.log(alert('state kurwa'))
  },

  dispatch(action) {
    this._State.ShitPosts = ProfilePageReducer(this._State.ShitPosts, action);
    this._State.Messages = MessagesReducer(this._State.Messages, action);
    this._callSubscriber();
  },

  subscriber(observer) {
    this._callSubscriber = observer
  },

};


export default store; 