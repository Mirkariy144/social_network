import {createSlice} from '@reduxjs/toolkit'

let initialState = {
  Post: [
    { text: 'Hey, bitch' },
    { text: 'get out' },
    { text: '.map' },
    { text: 'kurwa' },
    { text: 'props' },
  ],

  newPostLetter: '',
}

export const ProfilePageReducer = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    addNewPost: (state) => {
      
      let stateChanger = {
        ...state,
        Post: [...state.Post],
      };
      
      let newPostPush = {
        text: stateChanger.newPostLetter
      };
      
      stateChanger.Post.push(newPostPush);
      stateChanger.newPostLetter = ('');
      return stateChanger;
    },
      
    modifyPostContent: (state, action) => {
      let stateChanger = {...state};
      stateChanger.newPostLetter = action.payload;
      return stateChanger;
    },
    
  }
});

export const { addNewPost, modifyPostContent } = ProfilePageReducer.actions;

export default ProfilePageReducer.reducer;