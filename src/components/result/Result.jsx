import React from "react";
import "./result.css";

const Result = ({enemyCharacterSelected, enemyIndex, setEnemyIndex, characters, enemyAttacks, selectionArray, matchAttacks}) => {

  //const randomEnemyAttacks = enemyAttacks.map(value => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)

  const match = () => {
    let array = []
    let result = ''
    let wins = 0
    let loses = 0
    let draws = 0
    for (let i = 0; i < enemyAttacks.length; i++){
      if (selectionArray[i].power === enemyAttacks[i].power){
        result = 'D'
        draws++
      } else if (selectionArray[i].power < enemyAttacks[i].power){
        result = 'L'
        loses++
      } else {
        result = 'W'
        wins++
      }
      array.push([selectionArray[i], result, enemyAttacks[i]])
    }
    console.log(wins, loses, draws)
    return array
  }


  return (
    <>
      <div
        className={
            enemyCharacterSelected
            ? ""
            : "displayNone"
        }
      >
        <button onClick={() => console.log(match())}>Logging attacks</button>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Result;
