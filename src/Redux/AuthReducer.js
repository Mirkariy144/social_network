import {createSlice} from '@reduxjs/toolkit'


let initialState = {
  id: null,
}

export const AuthReducer = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    setId: ( state, action) => {
      state.id = action.payload
    },
  },
});

export const { setId } = AuthReducer.actions;

export default AuthReducer.reducer;