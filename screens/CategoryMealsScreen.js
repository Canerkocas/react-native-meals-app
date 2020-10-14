import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Text CategoriesMealsScreen</Text>
      <Text>Selected {selectedCategory.title}</Text>
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
