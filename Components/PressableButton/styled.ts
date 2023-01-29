import styled from "styled-components/native";
import colors from "../../constants/colors";

export const Button = styled.TouchableOpacity`
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 15px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;
