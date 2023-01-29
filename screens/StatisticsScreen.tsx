import React, { FC,useState } from "react";
import { Text, View, Button } from "react-native";
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
    <View>
      <Text>Statitics</Text>
    <Button title="Logout" onPress={signout} />
    </View>
  );
};

export default StatisticsScreen;