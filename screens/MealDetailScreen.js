import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.filter((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = () => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.filter((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
