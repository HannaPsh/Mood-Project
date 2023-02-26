import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TableScreen from '../screens/TableScreen/TableScreen';
import EmotionsDetails from '../screens/EmotionsInfo/DeatilsEmotion';

const Stack = createNativeStackNavigator();

const EmotionsListNavigator = () => (
  <Stack.Navigator /* mode="modal" */ screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Table" component={TableScreen} />
    <Stack.Screen name="EmotionsDetail" component={EmotionsDetails} />
  </Stack.Navigator>
);

export default EmotionsListNavigator;
