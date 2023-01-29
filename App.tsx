import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigation"; 
import React from "react";
import { Provider } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Nav from "./navigation/Nav";

const App = () =>{
 
  return (  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
 <Nav/>
    </NavigationContainer>
     </PersistGate>
    </Provider>)
}

export default App;