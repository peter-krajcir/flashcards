import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { red, green } from "../utils/colors";

export default QuizCompleted = ({ title, correct, incorrect }) => {
  const calculatePerc = (total, value) => {
    return ((value / total) * 100).toFixed(2);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quiz Completed!</Text>
      <Text style={styles.normal}>Statistics for deck: {title}</Text>
      <Text style={styles.correct}>Correct Answers: {correct}</Text>
      <Text style={styles.incorrect}>Incorrect Answers: {incorrect}</Text>
      <Text style={styles.normal}>
        Success rate: {calculatePerc(correct + incorrect, correct)}%
      </Text>
    </View>
  );
};

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
  }
});
