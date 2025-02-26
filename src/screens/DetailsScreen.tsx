import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StackNavProps } from "../navigation/types";

const DetailsScreen = () => {
  const {
    params: {
      course: { name },
    },
  } = useRoute<StackNavProps<"Details">["route"]>();

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
