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
    if (action.type === 'NEW-POST') {
      let newPostPush = {
        text: this._State.ShitPosts.newPostLetter
      };
    
      this._State.ShitPosts.Post.push(newPostPush)
      this._State.ShitPosts.newPostLetter = ('');
      this._callSubscriber();
    } else if (action.type === 'NEW-POST-WRIGHTING') {
        this._State.ShitPosts.newPostLetter = action.letter;
        this._callSubscriber();
    } else if (action.type === 'NEW-MESSAGE') {
        let newMessagePush = {
          text: this._State.Messages.updateMessageInput,
        };
    
        this._State.Messages.Message.push(newMessagePush)
        this._State.Messages.updateMessageInput = ('');
        this._callSubscriber();
    } else if (action.type === 'NEW-MESSAGE-TEXT') {
        this._State.Messages.updateMessageInput = action.letter;
        this._callSubscriber();
    }
  },

  // newPost() {
  //   let newPostPush = {
  //     text: this._State.ShitPosts.newPostLetter
  //   };
  
  //   this._State.ShitPosts.Post.push(newPostPush)
  //   this._State.ShitPosts.newPostLetter = ('');
  //   this._callSubscriber();
  // },

  // newPostWrighting(letter) {
  //   this._State.ShitPosts.newPostLetter = letter;
  //   this._callSubscriber();
  // },

  // newMessage() {
  //   let newMessagePush = {
  //     text: this._State.Messages.updateMessageInput,
  //   };
  
  //   this._State.Messages.Message.push(newMessagePush)
  //   this._State.Messages.updateMessageInput = ('');
  //   this._callSubscriber();
  // },

  // updateMessageText(letter) {
  //   this._State.Messages.updateMessageInput = letter;
  //   this._callSubscriber();
  // },
  
  subscriber(observer) {
    this._callSubscriber = observer
  },

};

export default store; 