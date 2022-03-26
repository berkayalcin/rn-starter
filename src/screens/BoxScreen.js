import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>BoxScreen</Text>
      <Text style={styles.textTwoStyle}>BoxScreen</Text>
      <Text style={styles.textThreeStyle}>BoxScreen</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textStyle: {
    fontSize: 20,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 0.25,
    alignSelf: "flex-start",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    flex: 0.5,
    alignSelf: "center",
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "blue",
    flex: 0.25,
    alignSelf: "flex-end",
  },
});
