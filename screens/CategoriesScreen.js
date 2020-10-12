import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Text Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
