import styled from "styled-components/native";
import colors from "../../constants/colors";
import shadows from "../../constants/shadows";

export const ItemContainer = styled.TouchableOpacity`
justify-content: center;
align-self: center;
width:80%;
height:50px;
background-color:${colors.light};;
border:${colors.primary};
`;
export const ModalView
= styled.View`
width:90%;
height: 300px;
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
export const ModalContent 
= styled.View`
flex-direction:"row"
  
`;

export const Emotion = styled.Text`
  text-align: center;
`;

export const CategoryContainer
= styled.View`
align-self: center;
width:80%;
height: 60px;
background-color:${colors.secondary};;
border:${colors.primary};
`;
export const Category = styled.Text`
  text-align: center;
  
`;
