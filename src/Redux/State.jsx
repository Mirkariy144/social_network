import { rerenderUI } from "../Render";

let State = {
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
    Post : [
      {text:'Hey, bitch'},
      {text:'get out'},
      {text:'.map'},
      {text:'kurwa'},
      {text:'props'},
    ],
  };

  export let newPost = (Post) => {
    let newPostPush = {
      text: Post
    };

    State.Post.push(newPostPush)
    rerenderUI(State, newMessage, newPost)
  };

  export let newMessage = (message) => {
    let newMessagePush = {
      text: message
      };

    State.Message.push(newMessagePush)
    rerenderUI(State, newMessage, newPost);
  };

  export default State;