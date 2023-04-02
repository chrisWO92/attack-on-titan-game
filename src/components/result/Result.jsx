import React from "react";
import "./result.css";

const Result = ({enemyCharacterSelected, enemyIndex, setEnemyIndex, characters, enemyAttacks, selectionArray, matchAttacks}) => {

    


  return (
    <>
      <div
        className={
            enemyCharacterSelected
            ? ""
            : "displayNone"
        }
      >
        <button onClick={() => console.log(matchAttacks)}>Logging attacks</button>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Result;
