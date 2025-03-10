import {
  Button,
  FlatList,
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import MyButton from "./MyButton";

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

  const listRef = useRef<FlatList>(null);

  const handlePress = (event: GestureResponderEvent) => {
    console.log(event.timeStamp);
    setCounter(counter + 1);

    if (listRef.current) {
      listRef.current.scrollToEnd();
    }
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
    <View style={styles.container}>
      <Text>{counter}</Text>

      {/* {todos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))} */}

      <View style={{ flex: 4 }}>
        <FlatList
          ref={listRef}
          data={todos}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <MyButton style={{ backgroundColor: "yellow" }} onPress={handlePress}>
          <Text>Counter button</Text>
        </MyButton>
        {/* <Button title="Klik mij" onPress={handlePress}></Button> */}
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
