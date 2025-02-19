import {
  Button,
  FlatList,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type UpdaterFunc = (value: number) => void;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoReadOnly = Readonly<Todo>;

interface CounterProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const Counter = ({ setCounter, counter }: CounterProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handlePress = (event: GestureResponderEvent) => {
    console.log(event.timeStamp);
    setCounter(counter + 1);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = (await response.json()) as Todo[];
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();

    // // VOOR DE CLEANUP
    // const timerId = setInterval(() => {
    //   console.log("Tick");
    // }, 1000);

    // return () => clearInterval(timerId);
  }, []);

  return (
    <View>
      <Text>{counter}</Text>

      {/* {todos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))} */}

      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button title="Klik mij" onPress={handlePress}></Button>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
