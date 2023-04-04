import React from "react";
import "./card.css";

const Card = ({
  name,
  picture,
  attacks,
  setCharacter,
  character,
  setSelected,
  setCharAttacks,
}) => {

  const characterSelection = () => {
    setCharacter(name);
    setSelected(true);
    setCharAttacks(attacks);
  };

  return (
    <>
      <div onClick={characterSelection} className={character === name ? ` card card-selected` : `card`}>
        <h3 className={character === name ? `titan-name titan-name-selected` : `titan-name`}>{name}</h3>
        <div id="image-container">
          <img src={picture} alt={name} className={character === name ? `titan-image titan-image-selected` : `titan-image`} />
        </div>
      </div>
    </>
  );
};

export default Card;
