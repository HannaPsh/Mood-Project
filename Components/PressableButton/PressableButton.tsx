import React, { FC } from "react";
import * as S from "./styled";

type Props = { title: string; color: string; onPress(): void };

const PressableButton: FC<Props> = ({ title, onPress, color }) => {
  return (
    <S.Button style={{ backgroundColor: color }} onPress={onPress}>
      <S.Text>{title}</S.Text>
    </S.Button>
  );
};

export default PressableButton;
