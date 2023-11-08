import {createSlice} from '@reduxjs/toolkit'
// import { baseState } from './data';
import axios from 'axios'

// let userID = 0;


let initialState = { 
  Users: [],
}

export const UsersReducer = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    changeFollow: (state, action) => {
      const index = state.Users.findIndex((user) => user.id === action.payload) 
      state.Users[index].followed = !state.Users[index].followed
    },

    setUsers: (state, action) => {
      state.Users = action.payload
    }
    
  }
});

export const {changeFollow, setUsers} = UsersReducer.actions;

export default UsersReducer.reducer;