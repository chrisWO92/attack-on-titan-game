import React from "react";
import "./card.css";

const Card = ({ name, picture, atacks, setCharacter, character, setSelected, setCharAtacks }) => {
    const characterSelection = () => {
        setCharacter(name)
        setSelected(true)
        setCharAtacks(atacks)
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
