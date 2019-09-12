import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckList from "./screens/DeckList";
import AppNavigator from "./screens/AppNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
