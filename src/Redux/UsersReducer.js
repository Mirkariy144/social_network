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
    
  }
});

export default UsersReducer.reducer;