import styled from "styled-components/native";
import colors from "../../constants/colors";
import shadows from "../../constants/shadows";


export const Container = styled.ImageBackground`
width: 100%;
  height: 100%;
  flex: 1;
  justify-content:center

`;
export const Text = styled.Text`
  color:${colors.black};
  text-align: center;
  
`;
export const MainContentContainer = styled.View`
align-self:"center";
border-radius:30;
/* background-color:${colors.light}; */
margin:auto;
/* border:1px solid ${colors.primary}; */
height:500;
width:100%;
opacity: 1;
/* ${shadows.lightShadow}; */
  
`;
export const WeekCalender = styled.View`
width:100%;
height:100px;
/* border:3px solid white; */
/* border-radius: 100px; */
/* background-color: ${colors.light}; */
  
`;


export const DaysContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
`
export const DateContainer = styled.View`
  align-items: center;
  justify-content: center; 
  height: 45px;
  width: 45px;
  border-radius: 50px;
  border-width: 1px;
  border-color: white;
  background-color:#85bcf4;
  ${shadows.lightShadow};

`
export const DayNameContainer = styled.View`
  height: 10px;
  align-items: center;
  margin-bottom: 5px;
  
`
export const DayName = styled.Text`
  font-size: 10px;
  line-height: 10px;
  color:#276ecf;
`
export const CalenderText = styled.Text`
  font-size: 10px;
  line-height: 10px;
  color:#276ecf;
`