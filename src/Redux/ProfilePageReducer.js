const newPostType = 'NEW-POST';
const newPostWrightingType = 'NEW-POST-WRIGHTING';

let initialState = {
  Post: [
    { text: 'Hey, bitch' },
    { text: 'get out' },
    { text: '.map' },
    { text: 'kurwa' },
    { text: 'props' },
  ],

  newPostLetter: [

  ],
}

const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case newPostType:
      let newPostPush = {
        text: state.newPostLetter
      };
      
      state.Post.push(newPostPush)
      state.newPostLetter = ('');
      return state;
    case newPostWrightingType:
      state.newPostLetter = action.letter;
      return state;
    default: 
      return state

  }
};

export const newPostActionCeator = () => {
  return {
    type: newPostType
  };
};

export const newPostWrightingActionCreator = (newPostWrighting) => {
  return {
    type: newPostWrightingType, letter: newPostWrighting
  };
};

export default ProfilePageReducer;