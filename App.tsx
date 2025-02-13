import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useAnimatedValue, View } from "react-native";
import Header from "./src/components/Header";
import { useState } from "react";
import Counter from "./src/components/Counter";

export default function App() {
  let title = "Mobile Les 1";

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Header title={title} />
      <Counter counter={counter} setCounter={setCounter} />
      <Text>Hello Mobile!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
