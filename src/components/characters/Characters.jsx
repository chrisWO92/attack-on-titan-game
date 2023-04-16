import React from "react";
import "./characters.css";

import Card from "../card/Card";

const Characters = ({
  charactersData,
  userCharacterName,
  setUserCharacterName,
  setCharacterSelected,
  charactersShowing,
  charactersHidding,
  setCharAttacks,
  setUserImage
}) => {
  return (
    <>
      <div className={charactersShowing ? "characters-container" : "displayNone"}>
        <h2 className="section-title">Select Your Titan</h2>
        <div id="characters">
          {charactersData &&
            charactersData.map(({ id, name, picture, attacks }) => {
              return (
                <Card
                  key={id}
                  picture={picture}
                  attacks={attacks}
                  setUserCharacterName={setUserCharacterName}
                  userCharacterName={userCharacterName}
                  setCharacterSelected={setCharacterSelected}
                  setCharAttacks={setCharAttacks}
                  setUserImage={setUserImage}
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
