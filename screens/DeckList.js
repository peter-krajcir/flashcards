import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { getDecks } from "../utils/api";
import DeckListItem from "./DeckListItem";
import { NavigationEvents } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

export default class DeckList extends Component {
  state = {
    decks: {}
  };

  handleOnPress = deck => {
    this.props.navigation.navigate("Details", { title: deck.title });
  };

  onDidFocus = () => {
    title = this.props.navigation.getParam("title");
    getDecks().then(decks => {
      this.setState({
        decks
      });
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        <ScrollView>
          {this.state.decks === null ? (
            <Text>There are no decks! Feel free to add one</Text>
          ) : (
            Object.keys(this.state.decks).map(key => (
              <DeckListItem
                key={key}
                deck={this.state.decks[key]}
                onPress={this.handleOnPress}
              />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  }
});
