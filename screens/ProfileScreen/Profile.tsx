import React, { FC, useState } from "react";
import { Text, View, Button, Image, ImageBackground, FlatList, Pressable, Platform } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
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

  const Categories = [
    { id: "1", name: "Anger", color: "yellow", source: require("../../assets/angry2.png") },
    { id: "2", name: "Love", color: "red", source: require("../../assets/loving.png") },
    { id: "3", name: "Sadness", color: "green", source: require("../../assets/sad.png") },
    { id: "4", name: "Scared", color: "pink", source: require("../../assets/scared.png") },
    { id: "5", name: "Happy", color: "purple", source: require("../../assets/happy.png") },
  ]

  const daysOfWeek = moment.weekdaysShort()

  const dates = [...Array(7)].map((_, i) => {
    const date = moment().startOf('week').add(i, 'days')
    return date.format('DD')
  })

  return (
    <View style={{ flex: 1 }}>
      {BackgroundAnimation()}
      <S.MainContentContainer>
        <S.WeekCalender>
          <S.Container>
            <S.DaysContainer>
              {daysOfWeek.map((weekDay, index) => {
                return (
                  <Pressable key={index}>
                    <S.DayNameContainer>
                      <S.DayName>{weekDay.toLocaleUpperCase()}</S.DayName>
                    </S.DayNameContainer>
                    <S.DateContainer>
                      <Text style={{ color: "white" }}>{dates[index]}</Text>
                    </S.DateContainer>
                  </Pressable>
                )
              })}
              <Pressable style={{ alignSelf: "center" }}>
                <S.DayNameContainer>
                  <S.CalenderText>CALENDER</S.CalenderText>
                </S.DayNameContainer>
                <MaterialCommunityIcons style={{ marginBottom: 0 }} name="calendar-month-outline" color="#276ecf" size={50} />
              </Pressable>
            </S.DaysContainer>
          </S.Container>
        </S.WeekCalender>
        <FlatList
          contentContainerStyle={{ alignItems: "center", marginTop: 50 }}
          numColumns={3}
          data={Categories}
          renderItem={({ item }) => <Category onPress={() => console.log("Category Pressed")} categoryName={item.name} color={item.color} source={item.source} />}
          keyExtractor={item => item.id}
        />
        <PressableButton style={{ alignSelf: "center" }} title="I am done for today!" color="#276ecf" onPress={() => console.log("Done is pressed")} />
      </S.MainContentContainer>
    </View>
 

  );
};

export default ProfileScreen;