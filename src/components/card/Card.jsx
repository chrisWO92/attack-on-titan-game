import React from "react";
import "./card.css";

const Card = ({ name, picture, attacks, setCharacter, character, setSelected, setCharAttacks }) => {
    const characterSelection = () => {
        setCharacter(name)
        setSelected(true)
        setCharAttacks(attacks)
    }
  return (
    <>
      <div id="card" onClick={characterSelection}>
        <h3>{name}</h3>
        <div id="image-container">
            <img src={picture} alt={name}/>
        </div>
      </div>
    </>
  );
};

export default Card;
