import { Button, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

type UpdaterFunc = (value: number) => void;

interface CounterProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const Counter = ({ setCounter, counter }: CounterProps) => {
  const handlePress = () => {};

  return (
    <View>
      <Text>{counter}</Text>

      <Button
        title="Klik mij"
        onPress={() => {
          setCounter(counter + 1);
        }}></Button>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
