import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import { blue, lightPurp, green, red, purple, white } from "../utils/colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

export default class QuizCompleted extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  calculatePerc = (total, value) => {
    return ((value / total) * 100).toFixed(2);
  };

  handleRestart = () => {
    this.props.handleRestartQuiz();
  };

  handleBack = () => {
    this.props.handleBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Quiz Completed!</Text>
        <Text style={styles.normal}>
          Statistics for deck: {this.props.title}
        </Text>
        <Text style={styles.correct}>
          Correct Answers: {this.props.correct}
        </Text>
        <Text style={styles.incorrect}>
          Incorrect Answers: {this.props.incorrect}
        </Text>
        <Text style={styles.normal}>
          Success rate:{" "}
          {this.calculatePerc(
            this.props.correct + this.props.incorrect,
            this.props.correct
          )}
          %
        </Text>
        <TouchableOpacity
          style={[
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn,
            { backgroundColor: lightPurp }
          ]}
          onPress={this.handleRestart}
        >
          <Text style={styles.submitBtnText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Platform.OS === "ios"
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn,
            { backgroundColor: blue }
          ]}
          onPress={this.handleBack}
        >
          <Text style={styles.submitBtnText}>Back To Deck</Text>
        </TouchableOpacity>
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
  heading: {
    fontSize: 24
  },
  normal: {
    fontSize: 18,
    fontWeight: "bold"
  },
  correct: {
    fontSize: 16,
    fontWeight: "bold",
    color: green
  },
  incorrect: {
    fontSize: 16,
    fontWeight: "bold",
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
