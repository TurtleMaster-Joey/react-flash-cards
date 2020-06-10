import React from "react";
import Card from "./Card";

const Cards = (props) => (
  <div>
    <h2>{props.question}</h2>
    <ul>
      {props.items.map((i) => (
      <Card
        key={i.id}
        id={i.id}
        question={i.question}
        answer={i.answer}
        cardClick1={props.cardClick}
      />
      ))}
    </ul>
  </div>
);

export default Cards;