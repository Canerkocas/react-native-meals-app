import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Text CategoriesMealsScreen</Text>
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

export default CategoriesMealsScreen;
