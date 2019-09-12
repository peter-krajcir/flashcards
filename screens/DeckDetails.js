import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import { purple, white, red, lightPurp } from "../utils/colors";
import { getDeck, removeDeck } from "../utils/api";
import { NavigationEvents } from "react-navigation";

export default class DeckDetails extends Component {
  state = {
    deck: null
  };

  handleAddCard = () => {
    this.props.navigation.navigate("AddCard", {
      title: this.props.navigation.getParam("title")
    });
  };

  handleDeleteDeck = () => {
    removeDeck(this.props.navigation.getParam("title"));
    this.props.navigation.goBack();
  };

  handleStartQuiz = () => {
    this.props.navigation.navigate("StartQuiz", {
      title: this.props.navigation.getParam("title")
    });
  };

  onDidFocus = () => {
    title = this.props.navigation.getParam("title");
    getDeck(title).then(deck => {
      this.setState({ deck });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        {this.state.deck !== null && (
          <View>
            <Text style={styles.deckName}>
              {this.props.navigation.getParam("title")}
            </Text>
            <Text style={styles.deckCount}>
              {this.state.deck.questions.length}{" "}
              {this.state.deck.questions.length === 1 ? "card" : "cards"}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={
                  Platform.OS === "ios"
                    ? styles.iosSubmitBtn
                    : styles.AndroidSubmitBtn
                }
                onPress={this.handleAddCard}
              >
                <Text style={styles.submitBtnText}>Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Platform.OS === "ios"
                    ? styles.iosSubmitBtn
                    : styles.AndroidSubmitBtn,
                  { backgroundColor: lightPurp }
                ]}
                onPress={this.handleStartQuiz}
              >
                <Text style={styles.submitBtnText}>Start Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  Platform.OS === "ios"
                    ? styles.iosSubmitBtn
                    : styles.AndroidSubmitBtn,
                  { backgroundColor: red }
                ]}
                onPress={this.handleDeleteDeck}
              >
                <Text style={styles.submitBtnText}>Delete Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  deckName: {
    fontSize: 30,
    marginBottom: 20
  },
  deckCount: {
    fontSize: 20
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    marginTop: 20
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});
