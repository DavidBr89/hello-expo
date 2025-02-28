import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useAnimatedValue,
  View,
} from "react-native";
import Header from "./src/components/Header";
import { useState } from "react";
import Counter from "./src/components/Counter";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  let title = "Mobile Les 1";

  const [counter, setCounter] = useState(0);

  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Header title={title} />
    //   <Counter counter={counter} setCounter={setCounter} />
    //   <Text>Hello Mobile!</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
