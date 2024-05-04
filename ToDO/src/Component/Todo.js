import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTODOStore } from "../store/todeStore";
const Todo = () => {
  const [text, setText] = useState("");
  const todos = useTODOStore((state) => state.todos);
  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      <Text style={{ color: "white", fontSize: 20 }}>{item.content}</Text>
    </View>
  );
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
        <AntDesign name="pluscircle" size={34} color="black" />
      </View>
    </View>
  );
};

export default Todo;
