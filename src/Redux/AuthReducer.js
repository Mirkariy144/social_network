import {createSlice} from '@reduxjs/toolkit'
import { axiosGetProfile } from '../API/API';

let initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
}

export const AuthReducer = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    setUserInfo: ( state, action) => {
        state.email = action.payload.email
        state.id = action.payload.id
        state.login = action.payload.login
        state.isAuth = true
    },
  },
});

export const getUserThunkCreator = (state) => {
  return (dispatch) => {
    axiosGetProfile().then(data => {
      if (data.resultCode === 0) {
        dispatch(AuthReducer.actions.setUserInfo(data.data))
      }
    })
  }
}

export const { setId } = AuthReducer.actions;

export default AuthReducer.reducer;