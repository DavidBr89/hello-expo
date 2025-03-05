import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { StackNavigatorParamsList, StackNavProps } from "./types";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AddCourseScreen from "../screens/AddCourseScreen";

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
  const navigation = useNavigation<StackNavProps<"Home">["navigation"]>();

  const handlePress = () => {
    navigation.navigate("AddCourse");
  };

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
          headerRight: ({ tintColor }) => {
            return (
              <TouchableOpacity
                style={{ marginRight: 8 }}
                onPress={handlePress}>
                <MaterialCommunityIcons
                  color={tintColor}
                  size={28}
                  name="plus"
                />
              </TouchableOpacity>
            );
          },
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
      <Stack.Screen name="AddCourse" component={AddCourseScreen} />

      {/* <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen />
        <Stack.Screen />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
