
import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from "../Components/NewListingButton/NewListingButton";

import WelcomeScreen from "../screens/WelcomeScreen";
import ProfileScreen from "../screens/ProfileScreen/Profile";
import TableScreen from "../screens/TableScreen";
import StatisticsScreen from "../screens/StatisticsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator: FC = () => (
  <Tab.Navigator initialRouteName="Profile" >
    <Tab.Screen name="Table" component={TableScreen}  options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="table"
            color={color}
            size={size}
          />
        ),
      })} />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
      tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("Profile")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })} 
    />
    <Tab.Screen name="Statistics" component={StatisticsScreen}  options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="calendar"
            color={color}
            size={size}
          />
        ),
      })}  />
  </Tab.Navigator>
);

export default AppNavigator;
