import React from "react";
import "./result.css";

const Result = ({enemyCharacterSelected}) => {
  return (
    <>
      <div
        className={
            enemyCharacterSelected
            ? ""
            : "displayNone"
        }
      >
        Result
      </div>
    </>
  );
};

export default Result;
