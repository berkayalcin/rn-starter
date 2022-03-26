import React from "react";
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const test = "A";
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go To Components Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go To List Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Go To Image Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go To Counter Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Colors");
        }}
        title="Go To Colors Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go To Square Demo"
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("SquareReducer");
        }}
        title="Go To Square Reducer Demo"
      ></Button>
      <TouchableOpacity
        onPress={() => {
          alert("no action !");
        }}
        style={styles.touchableStyle}
      >
        <Text>No Action</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  touchableStyle: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
