import React, { useEffect, useState } from "react";
import "./attacks.css";

const Attacks = ({
  charShowing,
  charAttacks,
  character,
  characters,
  enemyCharacterSelected,
  setEnemyCharacterSelected,
  selectionArray,
  setSelectionArray,
  enemyIndex,
  setEnemyIndex,
  enemyAttacks,
  setEnemyAttacks,
  getEnemyCharacter,
  setMatchAttacks,
  matchAttacks,
  selecArray,
  attackSelected0,
  attackSelected1,
  attackSelected2,
  attackSelected3,
  attackSelected4,
  showEnemyButton,
  setAttackSelected0,
  setAttackSelected1,
  setAttackSelected2,
  setAttackSelected3,
  setAttackSelected4,
  setShowEnemyButton,
}) => {
  /* const [attackSelected0, setAttackSelected0] = useState(false);
  const [attackSelected1, setAttackSelected1] = useState(false);
  const [attackSelected2, setAttackSelected2] = useState(false);
  const [attackSelected3, setAttackSelected3] = useState(false);
  const [attackSelected4, setAttackSelected4] = useState(false);

  const [showEnemyButton, setShowEnemyButton] = useState(false); */

  useEffect(() => {
    if (selecArray.length === 5) {
      setShowEnemyButton(true);
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
      selecArray.push({ id, name, power });
      setSelectionArray(selecArray);
      arraySetAttackSelected[id](true);      
    }
  };

  return (
    <>
      <div
        className={
          charShowing
            ? "displayNone"
            : enemyCharacterSelected
              ? "attacksFlex"
              : "displayNone"
        }
      >
        <h3 className="name-selection">You: {character}</h3>
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
          className={showEnemyButton ? "displayBlock" : "displayNone"}
          onClick={getEnemyCharacter}
        >
          Play!
        </button>
      </div>
    </>
  );
};

export default Attacks;
