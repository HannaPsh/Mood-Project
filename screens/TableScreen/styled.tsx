import styled from "styled-components/native";
import colors from "../../constants/colors";
import shadows from "../../constants/shadows";


export const ItemContainer = styled.TouchableOpacity`
justify-content: center;
border-radius: 30;
align-self: center;
width:80%;
height:50px;
background-color:${colors.light};;
margin: 3px;
${shadows.lightShadow};
`;
export const ModalView
= styled.View`
justify-content: space-between;
width:90%;
min-height: 300px;
background-color: white;
border-radius: 20;
padding: 35px;
align-items: 'center';
${shadows.lightShadow};
  
`;
export const CloseModal
= styled.Pressable`
align-self:flex-end;
  
  
`;
export const CenteredView 
= styled.View`
  flex: 1;
    justify-content: center;
    align-items: center;
  
`;


export const Emotion = styled.Text`
  text-align: center;
  font-weight: 700;
 
`;
export const Title = styled.Text`
  align-self: center;
  font-weight: 700;
 
`;
export const Description= styled.Text`
  text-align: center;
  font-weight: 400;
 
`;


export const CategoryContainer
= styled.View<{color:string}>`
justify-content: center;
border-radius: 30;
align-self: center;
width:80%;
height:50px;
background-color: ${(props) => (props.color)};
margin: 3px;
${shadows.lightShadow};
/* align-self: center;
width:100%;
height: 60px;
background-color:${colors.grey};
${shadows.lightShadow}; */


`;
export const Category = styled.Text`
  text-align: center;
  font-weight: 900;
 
`;
