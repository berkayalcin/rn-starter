import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        autoCapitalize="sentences"
        autoCorrect={false}
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
      ></TextInput>
      <Text>{text}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    padding: 10,
  },
});
