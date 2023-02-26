import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as S from "./styled";

type Props = { title: string; color: string; onPress(): void } & TouchableOpacityProps ;

const PressableButton: FC<Props> = ({ title, onPress, color, ...TouchableOpacityProps }) => {
  return (
    <S.Button   style={[
      {
        backgroundColor: color, width:300, height:50
      },
      TouchableOpacityProps.style,
    ]} onPress={onPress} /* {...TouchableOpacityProps} */ >
      <S.Text>{title}</S.Text>
    </S.Button>
  );
};

export default PressableButton;
