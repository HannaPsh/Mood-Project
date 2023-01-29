import { TouchableOpacity,Text, Button, Alert } from "react-native";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import {useDispatch} from 'react-redux';
import colors from "../constants/colors";
import { signOut } from "../redux/slices/userSlice";

const logout = (navigation: any, onPress?: () => void) => {
    const dispatch = useDispatch();
    const signout = ( )=> {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            {text: 'Yes', onPress: () => dispatch(signOut())},
            {text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              }
          ])
      
    }
    return (<Button title="Logout"  color={colors.danger}  onPress={onPress ? onPress : signout} />)}
  
  const goBack = (navigation: any, onPress?: () => void) => (
    <Button title="Go back" color={colors.white} onPress={onPress ? onPress : navigation.goBack} />
  )
  
  const headerOptions = ({ navigation }): NativeStackNavigationOptions => ({
    headerStyle: {
      backgroundColor: "#276ecf",
      
    },
    headerTintColor: colors.white,
    headerBackVisible: false,
    headerTitleAlign: 'center',
    headerShadowVisible: true,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.secondary,
    headerRight: () => logout(navigation),
    headerLeft: () => goBack(navigation),
    
    
  })

  export default headerOptions