import React, { Component } from "react";
import Cards from "./Cards";
import CardForm from "./CardForm";
import "./App.css";

class App extends Component {
  state = {
    cards: [
      {id:1, question: "What are 7 music modes?", answer: "Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian."},
      {id:2, question: "What is the Ionian Mode", answer: "The Ionian mode is a simple ‘doh re mi’ major key. It is the modern major scale. It is composed of natural notes beginning on C."},
      {id:3, question: "What is the Dorian Mode", answer: "The Dorian mode is very similar to the modern natural minor scale. The only difference is in the sixth note, which is a major sixth above the first note, rather than a minor sixth."},
      {id:4, question: "What is the Phrygian Mode", answer: "The Phrygian is the third mode. It is also very similar to the modern natural minor scale. The only difference is in the second note, which is a minor second not a major. The Phrygian dominant is also known as the Spanish gypsy scale, because it resembles the scales found in flamenco music."},
      {id:5, question: "What is the Lydian Mode", answer: "The Lydian mode has just one note changed from the Ionian, a major scale, but with the fourth note from the bottom sharpened to give a slightly unsettling sound."},
      {id:6, question: "What is the Mixolydian Mode", answer: "The single tone that differentiates this scale from the major scale is its seventh note, which is a flattened seventh rather than a major seventh."},
      {id:7, question: "What is the Aeolian Mode", answer: "Aeolian is the natural minor scale"},
      {id:8, question: "What is the Locrian Mode", answer: "The Locrian mode has five notes in its scale flattened a half-step."},
    ],
  };

  addItem = (cardQuestion, cardAnswer) => {
    let newCard = { id: `${Math.random()}`, question: cardQuestion, answer: cardAnswer};
    let newCards = [newCard, ...this.state.cards];
    this.setState({cards: newCards,});
  };

  handleClick = (id) => {
    const { cards } = this.state;
    const newCards = cards.map((card) => {
      if (card.id !== id) return card;
      return { ...card, };
    });
    this.setState({
      cards: newCards,
    });
  };
  render() {
    return (
      <div>
        <h1>Music Mode Flash Cards</h1>
        <CardForm addItem={this.addItem} />
        <Cards
          cardClick={this.handleClick}
          name={"Flash Cards"}
          items={this.state.cards}
        />
      </div>
    );
  }
}

export default App;

