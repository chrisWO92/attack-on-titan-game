import React from "react";
import "./characters.css";

import Card from "../card/Card";

const Characters = ({ characters, character, setCharacter, setSelected, charShowing, charactersHidding, setCharAttacks }) => {
  return (
    <>
      <div className={charShowing ? "" : "displayNone"}>
        <h2>Select Your Titan</h2>
        <div id="characters">
          {characters &&
            characters.map(({ id, name, picture, attacks }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  picture={picture}
                  attacks={attacks}
                  setCharacter={setCharacter}
                  character={character}
                  setSelected={setSelected}
                  setCharAttacks={setCharAttacks}
                />
              );
            })}
        </div>
        <button id='continue' onClick={charactersHidding}>Continue</button>
      </div>
    </>
  );
};

export default Characters;
