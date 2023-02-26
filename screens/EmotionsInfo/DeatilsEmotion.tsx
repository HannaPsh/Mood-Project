import React, { FC,useState } from "react";
import { Text, View, Image, Pressable, Button } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import { addAnger, cleanStore, signIn, signOut } from "../../redux/slices/userSlice";
import BackgroundAnimation from "../../Components/AnimationBAckground/Animation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

type Props = {route: any};

const EmotionsDetails: FC<Props> = ({ route }) => {
/*     const [name, setName] = useState('hanna')
  const [email, setEmail] = useState('psh')
  const user = useSelector(state => state.isLoggedIn)  */
  const dispatch = useDispatch();
  const listing = route.params;

 
  return (
    
    <View  style={{
        flex:1,
      
      }} >{BackgroundAnimation()}
        <Text style={{fontSize:29,textAlign:"center"}} >{listing.emotion}</Text>
  <Text>{listing.description}</Text>
 {listing.examples?.map((example:string)=>{
    return (<Text>{example}</Text>)
  })}
         <View style={{flexDirection:"row", width:"100%"}}><Text style={{alignSelf:"center"}}>Feeling like this today? </Text>
           <Pressable onPress={ ()=>dispatch(addAnger(listing.emotion))}><Text style={{color:"red"}}> Add this</Text></Pressable>
           <Button title="Reset store" onPress={ ()=>dispatch(cleanStore())}></Button>
      </View></View>
  );
};

export default EmotionsDetails;