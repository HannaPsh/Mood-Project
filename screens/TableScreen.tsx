import React, { FC,useState } from "react";
import { Text, View, Button } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { signIn, signOut } from "../redux/slices/userSlice";

type Props = {onPress(): void };

const TableScreen: FC<Props> = ({onPress}) => {
  const dispatch = useDispatch();

  const signout = ( )=> {
    dispatch(signOut())
  }

  return (
    <View>
      <Text>Table</Text>
    <Button title="Logout" onPress={signout} />
    </View>
  );
};

export default TableScreen;