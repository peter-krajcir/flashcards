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
import { addCardToDeck } from "../utils/api";

export default class AddDeck extends Component {
  state = {
    question: "",
    answer: ""
  };
  handleChangeQuestionText = question => {
    this.setState({
      question: question
    });
  };
  handleChangeAnswerText = answer => {
    this.setState({
      answer: answer
    });
  };

  handleOnPress = () => {
    const title = this.props.navigation.getParam("title");
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };
    addCardToDeck(title, card);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>Add New Card</Text>
        <TextInput
          onChangeText={this.handleChangeQuestionText}
          value={this.state.question}
          style={styles.input}
        />
        <TextInput
          onChangeText={this.handleChangeAnswerText}
          value={this.state.answer}
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
          <Text style={styles.submitBtnText}>Create Question</Text>
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
    borderWidth: 1,
    marginBottom: 10
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
