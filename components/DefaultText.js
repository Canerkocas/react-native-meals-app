import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = () => {
  return <Text style={styles.Text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "open-sans",
  },
});
export default DefaultText;
