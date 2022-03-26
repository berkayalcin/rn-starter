import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease}></Button>
      <Button title={`Decrease ${color}`} onPress={onDecrease}></Button>
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
