import React, { FC,useState } from "react";
import { TextInput, View, Button } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { signIn, signOut } from "../../redux/slices/userSlice";

type Props = {onPress(): void };

const LoginScreen: FC<Props> = ({onPress}) => {
    const [name, setName] = useState('hanna')
  const [email, setEmail] = useState('psh')
  const user = useSelector(state => state) 
  const dispatch = useDispatch();
console.log(user)
  const signin = ( )=> {
    dispatch(signIn({name,email}))
  }

  return (
    <View><TextInput value="Login" />
    <Button title="Login" onPress={signin} />
    </View>
  );
};

export default LoginScreen;