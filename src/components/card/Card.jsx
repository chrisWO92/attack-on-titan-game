import React from "react";
import "./card.css";

const Card = ({
  name,
  index,
  picture,
  attacks,
  setUserCharacterName,
  userCharacterName,
  setCharacterSelected,
  setCharAttacks,
  setUserId
}) => {

  const characterSelection = () => {
    setUserCharacterName(name);
    setCharacterSelected(true);
    setCharAttacks(attacks);
    console.log(index)
    setUserId(index);
  };

  return (
    <>
      <div onClick={characterSelection} className={userCharacterName === name ? ` card card-selected` : `card`}>
        <h3 className={userCharacterName === name ? `titan-name titan-name-selected` : `titan-name`}>{name}</h3>
        <div id="image-container">
          <img src={picture} alt={name} className={userCharacterName === name ? `titan-image titan-image-selected` : `titan-image`} />
        </div>
      </div>
    </>
  );
};

export default Card;
