import React from "react";
import "./result.css";

const Result = ({
  enemyCharacterSelected,
  enemy,
  enemyName,
  enemyIndex,
  setEnemyIndex,
  characters,
  enemyAttacks,
  selectionArray,
  matchAttacks,
  character
}) => {
  //const randomEnemyAttacks = enemyAttacks.map(value => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)

  const match = () => {
    let array = []
    let result = ""
    let message = ''
    let wins = 0
    let loses = 0
    let draws = 0
    for (let i = 0; i < enemyAttacks.length; i++) {
      if (selectionArray[i].power === enemyAttacks[i].power) {
        result = "D"
        draws++
      } else if (selectionArray[i].power < enemyAttacks[i].power) {
        result = "L"
        loses++
      } else {
        result = "W"
        wins++
      }
      array.push({
        id: i,
        userAttack: selectionArray[i],
        matchResult: result,
        enemyAttack: enemyAttacks[i],
      });
    }
    let matchResultsArray = [wins, loses, draws]
    console.log(matchResultsArray)
    if (wins > loses){
      message = 'Congrats, You Won!'
    } else if (wins < loses){
      message = 'Sorr, You Lost!'
    } else {
      message = "It's a draw!"
    }
    return [array, matchResultsArray, message]
  };

  const results = match()

  return (
    <>
      <h2 className={enemyCharacterSelected ? "match-title" : "displayNone"}>MATCH RESULTS</h2>
      <div id="result" className={enemyCharacterSelected ? "displayFlex" : "displayNone"}>
        <ul id="user-attacks">
        <h3>You: {character}</h3>
          {selectionArray &&
            selectionArray.map(({ id, name, power }) => {
              return (
                <li key={id} className="user-attack">
                  {name}: {power}
                </li>
              );
            })}
        </ul>
        <ul id="individual-results">
        <h3>Results:</h3>
          {results &&
            results[0].map(({ id, matchResult }) => {
              return <li key={id} className="win-or-lose">{matchResult}</li>;
            })}
        </ul>
        <ul id="enemy-attacks">
        <h3>Enemy: {enemyName}</h3>
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
      <h3 className={enemyCharacterSelected ? "wins-and-loses" : "displayNone"}>Wins: {results[1][0]} || Loses: {results[1][1]} || Draws: {results[1][2]}</h3>  
      <h2 className={enemyCharacterSelected ? "message-result" : "displayNone"}>{results[2]}</h2>     
    </>
  );
};

export default Result;
