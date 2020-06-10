import React from "react";

const Card = ({id, question, answer, cardClick1}) => (
  <li 
    style={question ? { ...styles.card} : styles.card}
    onClick={() => cardClick1(id)}
  >
    Question: {question}
    Answer: {answer}
  </li>
);

const styles = {
  card: {cursor: "pointer"},
};
export default Card;