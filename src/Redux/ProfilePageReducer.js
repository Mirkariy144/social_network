import {createSlice} from '@reduxjs/toolkit'
import { baseState } from './data';

let postID = 0

let initialState = {
  Posts: baseState.Posts.map((item)=> ({...item, id: postID++})),

  newPostLetter: '',
}

export const ProfilePageReducer = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    addNewPost: (state) => {  
      let newPostPush = {
        id: state.Posts.length,
        text: state.newPostLetter
      };
      
      state.Posts.push(newPostPush);
      state.newPostLetter = ('');
    },
      
    modifyPostContent: (state, action) => {
      state.newPostLetter = action.payload;
    },
    
  }
});

export const { addNewPost, modifyPostContent } = ProfilePageReducer.actions;

export default ProfilePageReducer.reducer;