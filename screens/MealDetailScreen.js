import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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
    heeaderRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("icon");
          }}
        />
      </HeaderButtons>
    ),
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
