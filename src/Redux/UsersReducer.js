import {createSlice} from '@reduxjs/toolkit'



let initialState = { 
  Users: [
    { followed: false,
      Name:'Veronika',
      Country: 'Russia',
      City: 'Saint-Petersburg',
      Status: 'I miss Cat, look at me!',
      Birthday: '30.06.1996',
      Education: 'X-ray',
      Website: 'Just for me',
      Avatar: 'https://sun6-20.userapi.com/s/v1/if1/03iNhTcpEU0rIWtAR3SYQ3fAO3ROzx43ZZ26vEcTHhexJazbty5wbFMcIZgOdvR-KjWZPo1M.jpg?size=428x580&quality=96&crop=0,0,428,580&ava=1',
    },
  ],
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