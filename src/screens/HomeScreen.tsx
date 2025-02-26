import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

const courses = [
  {
    id: 1,
    name: "Web 1",
  },
  {
    id: 2,
    name: "Web 2",
  },
  {
    id: 3,
    name: "Web 3",
  },
  {
    id: 4,
    name: "Mobile",
  },
];

interface CourseItem {
  id: number;
  name: string;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderCourse = ({
    item,
    index,
    separators,
  }: ListRenderItemInfo<CourseItem>) => {
    return (
      <MyButton
        onPress={() => {
          navigation.navigate("Details", { course: item, index: index });
        }}>
        <Text>{item.name}</Text>
      </MyButton>
    );
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id.toString()}
      />
      <MyButton
        onPress={() => {
          navigation.navigate("Details");
        }}>
        <Text>Ga naar details</Text>
      </MyButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
