import { Platform } from 'react-native'
import colors from './colors'

const shadowOffset = '0px 2px'


const androidLightShadow = {
  shadowColor: "#000",
  'shadow-offset': shadowOffset,
  shadowOpacity: 0.25,
  elevation: 5,
  shadowRadius: 4,
}

const iosLightShadow = {
    shadowColor: "#000",
    'shadow-offset': shadowOffset,
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 4,
}

const lightShadow = Platform.select({
  ios: iosLightShadow,
  android: androidLightShadow ,
})



export default {
  lightShadow,
}
