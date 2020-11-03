import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const MealDetailScreen = (props) => {
  const ListItem = (props) => {
    return (
      <View styles={style.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };
  const availableMeals = useSelector((state) => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = availableMeals.filter((meal) => meal.id === mealId);

  // useEffect(() => {
  //   props.navigation.setParams({ mealTitle: selectedMeal.title });
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detaills}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = () => {
  const mealId = props.navigation.getParam("mealId");
  const mealTitle = props.navigation.getParam("mealTitle");
  // const selectedMeal = Meals.filter((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
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
  image: {
    width: "100%",
    height: 200,
  },
  detaills: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
