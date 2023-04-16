import React, { useEffect } from "react";
import "./attacks.css";

const Attacks = ({
  charactersShowing,
  charAttacks,
  userCharacterName,
  showAttacks,
  setUserAttacks,
  getEnemyCharacter,
  userAttacksArray,
  attackSelected0,
  attackSelected1,
  attackSelected2,
  attackSelected3,
  attackSelected4,
  showPlayButton,
  setAttackSelected0,
  setAttackSelected1,
  setAttackSelected2,
  setAttackSelected3,
  setAttackSelected4,
  setShowPlayButton,
}) => {
 
  useEffect(() => {
    if (userAttacksArray.length === 5) {
      setShowPlayButton(true);
    }
  }, [
    attackSelected0,
    attackSelected1,
    attackSelected2,
    attackSelected3,
    attackSelected4,
  ]);

  const arrayAttackSelected = [
    attackSelected0,
    attackSelected1,
    attackSelected2,
    attackSelected3,
    attackSelected4,
  ];
  const arraySetAttackSelected = [
    setAttackSelected0,
    setAttackSelected1,
    setAttackSelected2,
    setAttackSelected3,
    setAttackSelected4,
  ];

  const clickHandler = (id, name, power) => {
    if (arrayAttackSelected[id] === false) {
      userAttacksArray.push({ id, name, power });
      setUserAttacks(userAttacksArray);
      arraySetAttackSelected[id](true);      
    }
  };

  return (
    <>
      <div
        className={
          charactersShowing
            ? "displayNone"
            : showAttacks
              ? "attacksFlex"
              : "displayNone"
        }
      >
        <h3 className="name-selection">You: {userCharacterName}</h3>
        <h4 className="attacks-title">Select your attacks:</h4>
        <ul id="attacks">
          {charAttacks &&
            charAttacks.map(({ id, name, power }) => {
              return (
                <li
                  key={id}
                  onClick={() => clickHandler(id, name, power)}
                  className={
                    arrayAttackSelected[id] ? `selected-attack` : "titan-attack"
                  }
                >
                  {name}: {power}
                </li>
              );
            })}
        </ul>
        <button
          id="get-enemy-character"
          className={showPlayButton ? "displayBlock" : "displayNone"}
          onClick={getEnemyCharacter}
        >
          Go!
        </button>
      </div>
    </>
  );
};

export default Attacks;
