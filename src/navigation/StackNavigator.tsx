import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { StackNavigatorParamsList } from "./types";

// const browserRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeScreen />,
//   },
// ]);

const Stack = createStackNavigator<StackNavigatorParamsList>();

const MyHeader = (props: StackHeaderProps) => {
  return (
    <View style={{ backgroundColor: "#43edfe", height: 150, paddingTop: 54 }}>
      <Text style={{ textAlign: "center" }}>{props.route.name}</Text>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // header: (props) => <MyHeader {...props} />,
        headerStyle: { backgroundColor: "#34deff" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 24 },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Start",
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />

      {/* <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen />
        <Stack.Screen />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
