import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AddDeck from "./AddDeck";
import DeckList from "./DeckList";
import DeckDetails from "./DeckDetails";
import AddCard from "./AddCard";
import StartQuiz from "./StartQuiz";

const DeckListStack = createStackNavigator(
  {
    Home: DeckList,
    Details: DeckDetails,
    AddCard: AddCard,
    StartQuiz: StartQuiz
  },
  {
    initialRouteName: "Home"
  }
);

DeckListStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
  )
};

DeckListStack.path = "";

const AddDeckStack = createStackNavigator(
  {
    Home: AddDeck,
    Details: DeckDetails
  },
  {
    initialRouteName: "Home"
  }
);

AddDeckStack.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="plus-square" size={30} color={tintColor} />
  )
};

AddDeckStack.path = "";

const tabNavigator = createBottomTabNavigator({
  DeckListStack,
  AddDeckStack
});

tabNavigator.path = "";

export default tabNavigator;
