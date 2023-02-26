import React, { FC,useState } from "react";
import { Text, View, Button, Image, ImageBackground, FlatList, Pressable, Platform } from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import PressableButton from "../../Components/PressableButton/PressableButton";
import colors from "../../constants/colors";
import Category from "./components/Category";
import * as S from './styled'
import BackgroundAnimation from "../../Components/AnimationBAckground/Animation";
import Svg, { SvgProps, Rect, Line } from 'react-native-svg'
import moment from 'moment'
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {onPress(): void };

const ProfileScreen: FC<Props> = ({onPress}) => {
const Categories=[{id:"1",name:"Anger",color:"yellow",source:require("../../assets/angry2.png")},{id:"2",name:"Love",color:"red",source:require("../../assets/loving.png")},{id:"3",name:"Sadness",color:"green",source:require("../../assets/sad.png")},{id:"4",name:"Scared",color:"pink",source:require("../../assets/scared.png")},{id:"5",name:"Happy",color:"purple",source:require("../../assets/happy.png")},]


function DashboardCalendar(props: SvgProps) {
  const width = 19.5
  const height = 18.5
  const color = colors.grey
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 24"
      fill="none"
      preserveAspectRatio="none"
      strokeWidth={1.4}
    >
      <Rect
        x="0.5"
        y="4.5"
        width="25"
        height="19"
        rx="0.5"
        stroke={color}
        stroke-linejoin="round"
      />
      <Line
        x1="7.5"
        y1="0.5"
        x2="7.5"
        y2="7.5"
        stroke={color}
        stroke-linecap="round"
        strokeWidth={1.4}
      />
      <Line
        x1="18.5"
        y1="0.5"
        x2="18.5"
        y2="7.5"
        stroke={color}
        stroke-linecap="round"
        strokeWidth={1.4}
      />
      <Line y1="11.5" x2="25" y2="11.5" stroke={color} />
    </Svg>
  )
}
const date = Date.now()
const days = [{order:1,date:date},{order:2,date:date},{order:3,date:date},{order:1,date:date},{order:1,date:date},{order:1,date:date},{order:1,date:date}]
  return (<View style={{flex:1}}>
{BackgroundAnimation()}
<S.MainContentContainer>
<S.WeekCalender>
<S.Container>
      <S.DaysContainer>
        {days.map(day => {
          const date = moment(day.date).format('DD')
          const dayName = moment(day.date).format('ddd').toUpperCase()
      
          return (<>
            <Pressable
          >
           
              <S.DayNameContainer>
                <S.DayName>{dayName}</S.DayName>
              </S.DayNameContainer>
              <S.DateContainer
              >
              <Text style={{color:"white"}}>{date}</Text>
              </S.DateContainer>
     
          </Pressable></>
          )
        })}
         <Pressable style={{alignSelf:"center"}}
          >
           
              <S.DayNameContainer>
                <S.CalenderText>CALENDER</S.CalenderText>
              </S.DayNameContainer> 
             <MaterialCommunityIcons  style={{marginBottom:0}} name="calendar-month-outline" color="#276ecf" size={50}/>
     
          </Pressable>
      </S.DaysContainer>
    </S.Container>
          
        </S.WeekCalender>
<FlatList
contentContainerStyle={{alignItems:"center", marginTop:50}}
numColumns={3}
        data={Categories}
        renderItem={({item}) => <Category  onPress={()=>console.log("Category Pressed")} categoryName={item.name} color={item.color} source={item.source} />}
        keyExtractor={item => item.id}
      />
     <PressableButton  style={{alignSelf:"center"}} title="I am done for today!" color="#276ecf" onPress={()=>console.log("Done is pressed")} />


</S.MainContentContainer>
</View>
  );
};

export default ProfileScreen;