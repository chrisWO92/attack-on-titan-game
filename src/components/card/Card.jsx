import React from "react";
import "./card.css";

const Card = ({
  index,
  name,
  picture,
  attacks,
  setCharacter,
  character,
  setSelected,
  setCharAttacks,
  characterIndex,
  setCharacterIndex,
  pic,
  setPic
}) => {

  const characterSelection = () => {
    setCharacter(name);
    setSelected(true);
    setCharAttacks(attacks);
    setCharacterIndex(index);
    setPic(picture);
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
