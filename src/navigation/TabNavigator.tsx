import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorParamsList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="InfoTab" component={InfoScreen} />
      <Tab.Screen
        name="Settings"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
