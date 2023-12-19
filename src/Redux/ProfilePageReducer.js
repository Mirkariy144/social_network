import { createSlice } from '@reduxjs/toolkit';
import { baseState } from './data';

let postID = 0;

let initialState = {
  Posts: baseState.Posts.map((item) => ({ ...item, id: postID++ })),
};

export const ProfilePageReducer = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    addNewPost: (state, data) => {
      let newPostPush = {
        id: state.Posts.length,
        text: data.payload.newPost,
      };
      state.Posts.push(newPostPush);
    },
  },
});

export const { addNewPost, modifyPostContent } = ProfilePageReducer.actions;

export default ProfilePageReducer.reducer;
