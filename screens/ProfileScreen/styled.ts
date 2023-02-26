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
background-color:${colors.light};
margin:auto;
/* border:1px solid ${colors.primary}; */
height:500;
width:100%;
opacity: 1;
/* ${shadows.lightShadow}; */
  
`;
