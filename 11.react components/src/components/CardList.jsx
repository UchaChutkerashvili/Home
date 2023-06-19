import React from "react";
import Card from "./Card";

import algebra from "../assets/algebra.jpg";
import calculus from "../assets/calculus.jpg"
import physics from "../assets/physics.jpg"
const data = [
  {
    id: 1,
    title: "algebra",
    description: "Award-winning text is used by tens and tens of thousands of students. Learn to master the essential algebra skills. Written in language that everyone can understand.",
    img: algebra,
    characters: ["x", "y"],
  },
  {
    id: 2,
    title: "Calculus",
    description: "Fluent description of the development of both the integral and differential calculus",
    img: calculus,
    characters: ["derivative", "integral", "differential"],
  },
  {
    id: 3,
    title: "Modern Physics",
    description: "Simple, clear, and mathematically uncomplicated explanations of physical concepts and theories of modern physics",
    img: physics,
    characters: ["Einstein", "Max Planck", "Paul Dirac","James Clerk Maxwell"],
  },
];

const CardList = () => {
  function action(props) {
    alert(`title: ${props.title}, characters: ${props.characters}`)
  }
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          img={card.img}
          description={card.description}
          characters={card.characters}
          action={action}
        />
      ))}
    </div>
  );
};

export default CardList;
