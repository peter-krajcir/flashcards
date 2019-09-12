import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { purple, white, lightPurp, red, green } from "../utils/colors";
export default class Question extends Component {
  state = {
    isVisibleAnswer: false
  };

  handleViewAnswer = () => {
    this.setState({
      isVisibleAnswer: true
    });
  };

  handleCorrectAnswer = () => {
    this.setState({
      isVisibleAnswer: false
    });
    this.props.handleCorrectAnswer();
  };

  handleIncorrectAnswer = () => {
    this.setState({
      isVisibleAnswer: false
    });
    this.props.handleIncorrectAnswer();
  };

  render() {
    return (
      <View>
        <Text>
          Question {this.props.currentQuestionNumber} of{" "}
          {this.props.totalQuestions}
        </Text>
        <Text style={styles.question}>{this.props.question}</Text>
        {this.state.isVisibleAnswer && (
          <Text style={styles.answer}>{this.props.answer}</Text>
        )}
        <View style={styles.actions}>
          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn
            }
            onPress={this.handleViewAnswer}
          >
            <Text style={styles.submitBtnText}>View Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn,
              { backgroundColor: green }
            ]}
            onPress={this.handleCorrectAnswer}
          >
            <Text style={styles.submitBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.AndroidSubmitBtn,
              { backgroundColor: red }
            ]}
            onPress={this.handleIncorrectAnswer}
          >
            <Text style={styles.submitBtnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  warning: {
    fontSize: 24
  },
  question: {
    fontSize: 24
  },
  answer: {
    fontSize: 20,
    color: red
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
