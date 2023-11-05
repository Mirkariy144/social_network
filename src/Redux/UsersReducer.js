import {createSlice} from '@reduxjs/toolkit'
import { baseState } from './data';

let userID = 0;

let initialState = { 
  Users: baseState.Users.map((item)=> ({...item, id: userID++})),
}

export const UsersReducer = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    changeFollow: (state, action) => {
      const index = state.Users.findIndex((user) => user.id === action.payload) 
      state.Users[index].Followed = !state.Users[index].Followed
    }
    
  }
});

export const {changeFollow} = UsersReducer.actions;

export default UsersReducer.reducer;