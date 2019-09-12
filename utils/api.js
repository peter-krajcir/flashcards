import { AsyncStorage } from "react-native";

const FLASHCARD_KEY = "FLASHCARD_KEY";

export function getDecks() {
  // return all of the decks
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results =>
    JSON.parse(results)
  );
}

export function getDeck(title) {
  // return the deck with specific title
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    const data = JSON.parse(results);
    return data[title];
  });
}

export function saveDeckTitle(title) {
  // add title to the decks
  return AsyncStorage.mergeItem(
    FLASHCARD_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
}

export function addCardToDeck(title, card) {
  // add card to the list of questions for the deck with title
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    let data = JSON.parse(results);
    const { question, answer } = card;
    data[title].questions.push({ question, answer });
    AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
  });
}

export function removeDeck(title) {
  // remove whole deck from the storage with selected title
  return AsyncStorage.getItem(FLASHCARD_KEY).then(results => {
    let data = JSON.parse(results);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
  });
}
