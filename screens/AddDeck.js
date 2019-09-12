import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import { gray, purple, white } from "../utils/colors";
import { saveDeckTitle } from "../utils/api";

export default class AddDeck extends Component {
  state = {
    value: ""
  };
  handleChangeText = text => {
    this.setState({
      value: text
    });
  };

  handleOnPress = () => {
    const title = this.state.value;
    saveDeckTitle(title);

    this.props.navigation.navigate("Details", { title: title });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={this.handleChangeText}
          value={this.state.value}
          style={styles.input}
        />
        <TouchableOpacity
          style={
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={this.handleOnPress}
        >
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
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
  question: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    width: 300,
    borderColor: gray,
    borderWidth: 1
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
