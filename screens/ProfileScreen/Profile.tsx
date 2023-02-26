import React, { FC,useState } from "react";
import { Text, View, Button, Image, ImageBackground, FlatList, Pressable } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import PressableButton from "../../Components/PressableButton/PressableButton";
import colors from "../../constants/colors";
import Category from "./components/Category";
import * as S from './styled'
import BackgroundAnimation from "../../Components/AnimationBAckground/Animation";

type Props = {onPress(): void };

const ProfileScreen: FC<Props> = ({onPress}) => {
const Categories=[{id:"1",name:"Anger",color:"yellow",source:require("../../assets/angry2.png")},{id:"2",name:"Love",color:"red",source:require("../../assets/loving.png")},{id:"3",name:"Sadness",color:"green",source:require("../../assets/sad.png")},{id:"4",name:"Scared",color:"pink",source:require("../../assets/scared.png")},{id:"5",name:"Happy",color:"purple",source:require("../../assets/happy.png")},]

  return (<View style={{flex:1}}>
{/*     <S.Container
    source={require("../../assets/ky.png")}
    imageStyle={{resizeMode: 'cover'}}
   
  > */}{BackgroundAnimation()}
<S.MainContentContainer><S.Text>Overview</S.Text>
<View style={{width:"100%",height:100, borderStyle:"solid",
        borderWidth:3,borderColor:"white",borderRadius:70}}></View>
        <Text>Today's log:</Text>
<FlatList
contentContainerStyle={{alignItems:"center"}}
numColumns={3}
        data={Categories}
        renderItem={({item}) => <Category  onPress={()=>console.log("Category Pressed")} categoryName={item.name} color={item.color} source={item.source} />}
        keyExtractor={item => item.id}
      />
     <PressableButton  style={{alignSelf:"center"}} title="I am done for today!" color="#276ecf" onPress={()=>console.log("Done is pressed")} />


</S.MainContentContainer>


 {/*  </S.Container> */}</View>
  );
};

export default ProfileScreen;