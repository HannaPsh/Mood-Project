import React, { FC,useState } from "react";
import { Text, View, Image } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { signIn, signOut } from "../redux/slices/userSlice";

type Props = {onPress(): void };

const StatisticsScreen: FC<Props> = ({onPress}) => {
/*     const [name, setName] = useState('hanna')
  const [email, setEmail] = useState('psh')
  const user = useSelector(state => state.isLoggedIn)  */
  const dispatch = useDispatch();

  const signout = ( )=> {
    dispatch(signOut())
  }

  return (
    <View  style={{
        flex:1,
        justifyContent:"space-between"
      
      }} >
        <Text>Statistics</Text>
      <Image   source={require("../assets/Heart.png")}
        style={{
          width: 200,
          height: 200,
          alignSelf:"flex-end"
        
        }}/>
      </View>
  );
};

export default StatisticsScreen;