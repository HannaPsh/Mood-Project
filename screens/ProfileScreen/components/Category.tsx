import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC,useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import {useSelector,useDispatch} from 'react-redux';
import colors from "../../../constants/colors";
import { signIn, signOut } from "../../../redux/slices/userSlice";

type Props = {
    categoryName:string,
    color:string,
    source:any,
    onPress?(): void };
  

const Category: FC<Props> = ({categoryName,onPress,color,source}) => {
/*     const [name, setName] = useState('hanna')
  const [email, setEmail] = useState('psh')
  const user = useSelector(state => state.isLoggedIn)  */
  const dispatch = useDispatch();

  return (
    <TouchableOpacity 
   onPress={onPress}
    style={{
        borderStyle:"solid",
        borderWidth:3,
        justifyContent:"center",
        alignItems:"center",
    borderColor:"white",
    backgroundColor:colors.light,
    height:100,
    marginRight:15,
    marginLeft:20,
    marginTop:20,
    width:100,
    borderRadius:10,
      }} >

<Image style={{width:70, height:70}} source= {source}/>
        <Text style={{color:"black",textAlign:"center"}}>{categoryName}</Text>
        
     
      </TouchableOpacity>
  );
};

export default Category;