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
      let newPostPush = {
        text: state.newPostLetter
      };
      
      state.Post.push(newPostPush)
      state.newPostLetter = ('');
    },
      
    modifyPostContent: (state, action) => {
      state.newPostLetter = action.payload;
    },
    
  }
});

export const { addNewPost, modifyPostContent } = ProfilePageReducer.actions;

export default ProfilePageReducer.reducer;