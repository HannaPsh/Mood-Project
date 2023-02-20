import { createSlice } from "@reduxjs/toolkit";

type User = {
  name:string
  email:string
  emotions:string[]
  
}

interface UserState {
  user: User;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: {name:"", email:"", emotions:[]},
  isLoggedIn: false,
  
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload}
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {...state.user}
      state.isLoggedIn = false
    },
    addEmotion: (state,action) => {
      state.user.emotions.push(action.payload);
    }
  }
})

export const {signIn, signOut,addEmotion} = userSlice.actions
export default userSlice.reducer