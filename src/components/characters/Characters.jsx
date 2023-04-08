import React from "react";
import "./characters.css";

import Card from "../card/Card";

const Characters = ({
  characters,
  character,
  setCharacter,
  setSelected,
  charShowing,
  charactersHidding,
  setCharAttacks,
  characterIndex,
  setCharacterIndex,
  pic,
  setPic
}) => {
  return (
    <>
      <div className={charShowing ? "characters-container" : "displayNone"}>
        <h2 className="section-title">Select Your Titan</h2>
        <div id="characters">
          {characters &&
            characters.map(({ id, name, picture, attacks }) => {
              return (
                <Card
                  key={id}
                  index={id}
                  name={name}
                  picture={picture}
                  attacks={attacks}
                  setCharacter={setCharacter}
                  character={character}
                  setSelected={setSelected}
                  setCharAttacks={setCharAttacks}
                  characterIndex={characterIndex}
                  setCharacterIndex={setCharacterIndex}
                  pic={pic}
                  setPic={setPic}
                />
              );
            })}
        </div>
        <button id="continue" onClick={charactersHidding}>
          Continue
        </button>
      </div>
      
    </>
  );
};

export default Characters;
