import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTODOStore } from "../store/todeStore";
const Todo = () => {
  const [text, setText] = useState("");
  const todos = useTODOStore((state) => state.todos);

  const renderItem = ({ item }) => (
    <View style={{ margin: 10, flexDirection: "row" }}>
      <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
        {item.id}:
      </Text>
      <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
        {item.item}
      </Text>
      <View style={{ alignItems: "center" }}>
        <AntDesign
          name="delete"
          size={24}
          color="white"
          onPress={() => HandleRemove(item.id)}
        />
      </View>
    </View>
  );

  const { addTodo, removeTodo } = useTODOStore();

  const HandleRemove = (id) => {
    removeTodo(id);
  };

  const HandleAdd = () => {
    if (text.length) {
      addTodo({
        id: todos.length + 1,
        item: text,
      });
      setText("");
    }
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          backgroundColor: "gray",
          marginHorizontal: 100,
        }}
      >
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          marginTop: 80,
          width: 200,
          marginLeft: 100,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginRight: 20,
            width: 200,
          }}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Enter text here"
        />
        <AntDesign
          name="pluscircle"
          size={34}
          color="black"
          onPress={HandleAdd}
        />
      </View>
    </View>
  );
};

export default Todo;
