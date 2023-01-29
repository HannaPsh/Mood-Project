import React, { FC } from "react";
import { TextInput, View } from "react-native";

type Props = { };

const RegisterScreen: FC<Props> = () => {
  return (
    <View><TextInput value="Login" /></View>
  );
};

export default RegisterScreen;