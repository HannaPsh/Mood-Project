import { createSlice } from "@reduxjs/toolkit";
import {User,Emotion} from '../../constants/types'

/* type User = {
  name:string
  email:string
  emotions:string[]
  
} */

/* interface UserState {
  user: User;
  isLoggedIn: boolean;
}
 */
const initialState: User = {
  id:1,
  userName:"",
  email:"",
  password:"",
  lang:"en",
  isLoggedIn: false,
  history:[{ date: new Date(Date.now()),
    anger:[],
    love: [],
    sadness:[],
    fear:[],
    happiness:[]},]
  
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
     ;
  state.isLoggedIn = true;
      
    },
    signOut: (state) => {
      state.isLoggedIn = false;
    },
    addAnger: (state, action) => {
      /* const { emotion } = action.payload; */
     
      const lastEmotion = state.history[state.history.length - 1];
      /* if(lastEmotion.date===new Date(Date.now())) */
      lastEmotion.anger.push(action.payload);
    },
    cleanStore: () => {
  return { ...initialState };
},
    
   /*  addEmotion: (state,action) => {
      state.emotions.push(action.payload);
    } */
  }
})

export const {signIn, signOut,addAnger,cleanStore/* ,addEmotion */} = userSlice.actions
export default userSlice.reducer