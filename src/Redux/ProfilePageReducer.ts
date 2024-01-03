import { createSlice } from '@reduxjs/toolkit';
import { baseState } from './data';

interface ProfilePageState {
  Posts: {
    id: number;
    text: string;
  }[];
}

let postID: number = 0;

let initialState: ProfilePageState = {
  Posts: baseState.Posts.map((item) => ({ ...item, id: postID++ })),
};

export const ProfilePageReducer = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    addNewPost: (state: { Posts: { id: number }[]}, data: { payload: { newPost: string }}) => {
      let newPostPush = {
        id: state.Posts.length,
        text: data.payload.newPost,
      };
      state.Posts.push(newPostPush);
    },
  },
});

export const { addNewPost } = ProfilePageReducer.actions;

export default ProfilePageReducer.reducer;
