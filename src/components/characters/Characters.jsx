import React from "react";
import "./characters.css";

import Card from "../card/Card";

const Characters = ({ characters, character, setCharacter, setSelected, charShowing, charactersHidding, setCharAtacks }) => {
  return (
    <>
      <div className={charShowing ? "" : "displayNone"}>
        <h2>Select Your Titan</h2>
        <div id="characters">
          {characters &&
            characters.map(({ id, name, picture, atacks }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  picture={picture}
                  atacks={atacks}
                  setCharacter={setCharacter}
                  character={character}
                  setSelected={setSelected}
                  setCharAtacks={setCharAtacks}
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
