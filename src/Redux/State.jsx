import { rerenderUI } from "../Render";

let State = {
    Messages: {
      Characters : [
        {name:'Jovani Jorgo'},
        {name:'Veronika'},
        {name:'Selester'},
        {name:'Yoba Kot'},
        {name:'Kirasa'},
        {name:'MBT 80'},
      ],
      Message : [
        {text: 'I love you'},
        {text: 'Just try to make my future'},
        {text: 'Can you help me, JS?'},
      ],
      updateMessageInput: [

      ],
    },
    ShitPosts: {
      Post : [
        {text:'Hey, bitch'},
        {text:'get out'},
        {text:'.map'},
        {text:'kurwa'},
        {text:'props'},
      ],

      newPostLetter : [
        
      ],
    },
  };

  export let newPost = (Post) => {
    let newPostPush = {
      text: Post
    };
    
    State.ShitPosts.Post.push(newPostPush)
    rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);  };

  export let newPostWrighting = (letter) => {
    State.ShitPosts.newPostLetter = letter;
    rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);  }

  export let newMessage = (message) => {
    let newMessagePush = {
      text: message
      };

    State.Messages.Message.push(newMessagePush)
    rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);  };

  export let updateMessageText = (letter) => {
    State.Messages.updateMessageInput = letter;
    rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);
  };

  export default State;