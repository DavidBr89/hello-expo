import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigatorParamsList } from "./types";
import InfoScreen from "../screens/InfoScreen";
import AboutScreen from "../screens/AboutScreen";
import NativeScreen from "../screens/NativeScreen";

const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Info" component={InfoScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Native" component={NativeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
