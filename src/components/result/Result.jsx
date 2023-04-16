import React from "react";
import "./result.css";

const Result = ({
  enemyName,
  enemyAttacks,
  userAttacks,
  userCharacterName,
  playAgain,
  showResults
}) => {

  const match = () => {
    let array = [];
    let result = "";
    let message = "";
    let wins = 0;
    let loses = 0;
    let draws = 0;
    for (let i = 0; i < enemyAttacks.length; i++) {
      if (userAttacks[i].power === enemyAttacks[i].power) {
        result = "D";
        draws++;
      } else if (userAttacks[i].power < enemyAttacks[i].power) {
        result = "L";
        loses++;
      } else {
        result = "W";
        wins++;
      }
      array.push({
        id: i,
        userAttack: userAttacks[i],
        matchResult: result,
        enemyAttack: enemyAttacks[i],
      });
    }
    let matchResultsArray = [wins, loses, draws];
    if (wins > loses) {
      message = "Congrats, You Won!";
    } else if (wins < loses) {
      message = "Sorry, You Lost!";
    } else {
      message = "It's a draw!";
    }
    return [array, matchResultsArray, message];
  };

  const results = match();

  return (
    <>
      <div
        className={showResults ? "results-container" : "displayNone"}
      >
        <h2 className="match-title">MATCH RESULTS</h2>
        <div id="result" className="displayFlex">
          <ul id="user-attacks">
            <h3 className="result-title-string">You: {userCharacterName}</h3>
            {userAttacks &&
              userAttacks.map(({ id, name, power }) => {
                return (
                  <li key={id} className="user-attack">
                    {name}: {power}
                  </li>
                );
              })}
          </ul>
          <ul id="individual-results">
            <h3 className="result-title-string">Results:</h3>
            {results &&
              results[0].map(({ id, matchResult }) => {
                return (
                  <li key={id} className="win-or-lose">
                    {matchResult}
                  </li>
                );
              })}
          </ul>
          <ul id="enemy-attacks">
            <h3 className="result-title-string">Enemy: {enemyName}</h3>
            {enemyAttacks &&
              enemyAttacks.map(({ id, name, power }) => {
                return (
                  <li key={id} className="enemy-attack">
                    {name}: {power}
                  </li>
                );
              })}
          </ul>
        </div>
        <h3 className="wins-and-loses">
          Wins: {results[1][0]} || Loses: {results[1][1]} || Draws:{" "}
          {results[1][2]}
        </h3>
        <h2 className="message-result">{results[2]}</h2>
        <button id="play-again" onClick={playAgain}>Play Again</button>
      </div>
    </>
  );
};

export default Result;
