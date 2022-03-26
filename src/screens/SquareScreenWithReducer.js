import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, red: state.red + action.payload };
    case "green":
      return { ...state, green: state.green + action.payload };
    case "blue":
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
const SquareScreenWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const COLOR_INCREMENT = 15;
  return (
    <View style={{ padding: 25 }}>
      <Text>{`colors reducer ${state.red} ${state.green} ${state.blue}`}</Text>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT });
        }}
        color={"Red"}
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT });
        }}
        color={"Green"}
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT });
        }}
        color={"Blue"}
      ></ColorCounter>

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </View>
  );
};

export default SquareScreenWithReducer;

const styles = StyleSheet.create({});
