import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDeck } from "../utils/api";
import { NavigationEvents } from "react-navigation";
import Question from "./Question";
import QuizCompleted from "./QuizCompleted";

export default class StartQuiz extends Component {
  state = {
    deck: null,
    correct: 0,
    incorrect: 0,
    currentQuestionIndex: 0,
    isVisibleAnswer: false
  };

  onDidFocus = () => {
    title = this.props.navigation.getParam("title");
    getDeck(title).then(deck => {
      this.setState({ deck });
    });
  };

  handleCorrectAnswer = () => {
    this.setState(prevState => ({
      isVisibleAnswer: false,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      correct: prevState.correct + 1
    }));
  };

  handleIncorrectAnswer = () => {
    this.setState(prevState => ({
      isVisibleAnswer: false,
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
      incorrect: prevState.incorrect + 1
    }));
  };
  // {this.state.currentQuestionIndex+1 === this.state.deck.questions.length}
  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        {this.state.deck !== null && (
          <View>
            {this.state.deck.questions.length === 0 ? (
              <Text style={styles.warning}>
                There are no questions! Please add first some questions to start
                the Quiz
              </Text>
            ) : this.state.currentQuestionIndex ===
              this.state.deck.questions.length ? (
              <QuizCompleted
                title={this.props.navigation.getParam("title")}
                correct={this.state.correct}
                incorrect={this.state.incorrect}
              />
            ) : (
              <Question
                currentQuestionNumber={this.state.currentQuestionIndex + 1}
                totalQuestions={this.state.deck.questions.length}
                question={
                  this.state.deck.questions[this.state.currentQuestionIndex]
                    .question
                }
                answer={
                  this.state.deck.questions[this.state.currentQuestionIndex]
                    .answer
                }
                handleCorrectAnswer={this.handleCorrectAnswer}
                handleIncorrectAnswer={this.handleIncorrectAnswer}
              />
            )}
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
    justifyContent: "center",
    alignItems: "center"
  },
  warning: {
    fontSize: 24
  }
});
