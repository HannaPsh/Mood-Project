import React, { FC,useState } from "react";
import { Text, View, Image, FlatList} from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { signIn, signOut } from "../../redux/slices/userSlice";

type Props = {onPress(): void };
type FlatListItem = {
  name:string
}

const TableScreen: FC<Props> = ({onPress}) => {
  const dispatch = useDispatch();
const GNEV = [{id:"1",name:"stradanije"}, {id:"1",name:"sasjlakslakssk"},{id:"1",name:"skto"},{id:"1",name:"jaksjskajsaksjjs"}];
const Item: FC<FlatListItem>  = ({name}) => (
  <View >
    <Text>{name}</Text>
  </View>
);  

return (
    <View  style={{
        flex:1,
        justifyContent:"space-between"
      
      }} >
        <Text>MyProfile</Text>
        <FlatList
        data={GNEV}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
      <Image   source={require("../../assets/Brain2.png")}
        style={{
          width: 200,
          height: 200,
          alignSelf:"flex-start"
        
        }}/>
      </View>
  );
};

export default TableScreen;