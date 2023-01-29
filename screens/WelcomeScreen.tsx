import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import PressableButton from "../Components/PressableButton/PressableButton";
import colors from "../constants/colors";
import {useSelector,useDispatch} from 'react-redux';

const WelcomeScreen=({ navigation })=> {
  const user = useSelector(state => state.isLoggedIn) 
  return (
    <ImageBackground
      source={require("../assets/imageBackground.webp")}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center", position: "absolute", top: 70 }}>
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            
          }}
        />
        <Text>Smth you want to say</Text>
      </View>
      <Text />

      <PressableButton
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color={colors.primary}
      />
      <PressableButton
        title="Register"
        onPress={() => navigation.navigate('Register')}
        color={colors.secondary}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen