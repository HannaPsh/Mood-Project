import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage ,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

/* 
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
export const store = configureStore({
  reducer: userReducer,
  devTools: process.env.NODE_ENV !== 'production',
})
*/
