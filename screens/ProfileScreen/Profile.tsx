import React, { FC,useState } from "react";
import { Text, View, Button, Image, ImageBackground } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { signIn, signOut } from "../../redux/slices/userSlice";

type Props = {onPress(): void };

const ProfileScreen: FC<Props> = ({onPress}) => {
/*     const [name, setName] = useState('hanna')
  const [email, setEmail] = useState('psh')
  const user = useSelector(state => state.isLoggedIn)  */
  const dispatch = useDispatch();

  const signout = ( )=> {
    dispatch(signOut())
  }

  return (
 /*    <View  style={{
      flex:1,
      justifyContent:"space-between"
    
    }} >
      <Text>MyProfile</Text>
    <Image   source={require("../../assets/Emotions2.png")}
      style={{
        width: 200,
        height: 200,
        alignSelf:"center"
      
      }}/>
    </View> */
    <ImageBackground
    source={require("../../assets/waves.png")}
    style={{
      width: "100%",
      height: "100%",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    }}
  ></ImageBackground>
  );
};

export default ProfileScreen;