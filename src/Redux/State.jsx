
let rerenderUI = () => {
  console.log(alert('state kurwa'))
};

let State = {
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
};

export const newPost = (Post) => {
  let newPostPush = {
    text: State.ShitPosts.newPostLetter
  };

  State.ShitPosts.Post.push(newPostPush)
  State.ShitPosts.newPostLetter = ('');
  rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);
};

export const newPostWrighting = (letter) => {
  State.ShitPosts.newPostLetter = letter;
  rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);
}

export const newMessage = () => {
  let newMessagePush = {
    text: State.Messages.updateMessageInput,
  };

  State.Messages.Message.push(newMessagePush)
  State.Messages.updateMessageInput = ('');
  rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);
};

export const updateMessageText = (letter) => {
  State.Messages.updateMessageInput = letter;
  rerenderUI(State, newMessage, newPost, newPostWrighting, updateMessageText);
};

export const subscriber = (observer) => {
  rerenderUI = observer
};



export default State; 