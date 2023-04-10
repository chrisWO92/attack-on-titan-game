import React, { useEffect, useState } from "react";
import "./App.css";
import Attacks from "./components/attacks/Attacks";
import Characters from "./components/characters/Characters";
import ImageBg from "./components/ImageBg/ImageBg";
import Map from "./components/map/Map";

import IMG1 from "./assets/attack-on-titan.png";
import IMG2 from "./assets/female-titan.png";
import IMG3 from "./assets/armored-titan.png";
import IMG4 from "./assets/colossal-titan.png";
import IMG5 from "./assets/beast-titan.png";
import IMG6 from "./assets/warhammer-titan.png";
import IMG7 from "./assets/jaw-titan.png";
import IMG8 from "./assets/cart-titan.png";
import Result from "./components/result/Result";

let canvaVariables = {
  x: 3,
  y: 3,
  width: 30,
  height: 25,
  speedX: 0,
  speedY: 0,
};

const characters = [
  {
    id: "0",
    name: "Attack on Titan",
    picture: IMG1,
    attacks: [
      { id: 0, name: "Melee Fight", power: 8 },
      { id: 1, name: "Intelligence", power: 7 },
      { id: 2, name: "Strength", power: 8 },
      { id: 3, name: "Stamina", power: 10 },
      { id: 4, name: "Hardening", power: 10 },
    ],
    x: 150,
    y: 60
  },
  {
    id: "1",
    name: "Female Titan",
    picture: IMG2,
    attacks: [
      { id: 0, name: "Melee Fight", power: 9 },
      { id: 1, name: "Intelligence", power: 8 },
      { id: 2, name: "Strength", power: 7 },
      { id: 3, name: "Armor", power: 7 },
      { id: 4, name: "Scream Suicide", power: 10 },
    ],
    x: 90,
    y: 50
  },
  {
    id: "2",
    name: "Armored Titan",
    picture: IMG3,
    attacks: [
      { id: 0, name: "Melee Fight", power: 7 },
      { id: 1, name: "Intelligence", power: 6 },
      { id: 2, name: "Strength", power: 9 },
      { id: 3, name: "Armor", power: 9 },
      { id: 4, name: "Armored Assault", power: 10 },
    ],
    x: 130,
    y: 100
  },
  {
    id: "3",
    name: "Colossal Titan",
    picture: IMG4,
    attacks: [
      { id: 0, name: "Destruction", power: 7 },
      { id: 1, name: "Intelligence", power: 5 },
      { id: 2, name: "Strength", power: 8 },
      { id: 3, name: "Hot Steam", power: 9 },
      { id: 4, name: "Blast Attack", power: 10 },
    ],
    x: 130,
    y: 125
  },
  {
    id: "4",
    name: "Beast Titan",
    picture: IMG5,
    attacks: [
      { id: 0, name: "Melee fight", power: 7 },
      { id: 1, name: "Intelligence", power: 9 },
      { id: 2, name: "Strength", power: 7 },
      { id: 3, name: "Titan Control", power: 9 },
      { id: 4, name: "Stones", power: 10 },
    ],
    x: 5,
    y: 120
  },
  {
    id: "5",
    name: "War Hammer Titan",
    picture: IMG6,
    attacks: [
      { id: 0, name: "Melee fight", power: 8 },
      { id: 1, name: "Intelligence", power: 6 },
      { id: 2, name: "Strength", power: 8 },
      { id: 3, name: "Armored Weapons", power: 10 },
      { id: 4, name: "Tines Attack ", power: 10 },
    ],
    x: 250,
    y: 120
  },
  {
    id: "6",
    name: "Jaw Titan",
    picture: IMG7,
    attacks: [
      { id: 0, name: "Melee fight", power: 7 },
      { id: 1, name: "Speed", power: 9 },
      { id: 2, name: "Strength", power: 5 },
      { id: 3, name: "Claws", power: 9 },
      { id: 4, name: "Jaw Attack", power: 9 },
    ],
    x: 250,
    y: 10
  },
  {
    id: "7",
    name: "Cart Titan",
    picture: IMG8,
    attacks: [
      { id: 0, name: "Melee fight", power: 6 },
      { id: 1, name: "Speed", power: 8 },
      { id: 2, name: "Stamina", power: 8 },
      { id: 3, name: "Intelligence", power: 8 },
      { id: 4, name: "Amo Attack", power: 9 },
    ],
    x: 260,
    y: 70
  },
];

let enemyIMGArraray = []

for (let i = 0; i < characters.length; i++) {
  enemyIMGArraray.push({pic: characters[i].picture, x: characters[i].x, y: characters[i].y, name: characters[i].name, id: characters[i].id})
}

let selecArray = [];

function App() {
  const [character, setCharacter] = useState("");
  const [selected, setSelected] = useState(false);
  const [charShowing, setCharShowing] = useState(true);
  const [charAttacks, setCharAttacks] = useState([]);
  const [enemyCharacterSelected, setEnemyCharacterSelected] = useState(false);
  const [enemy, setEnemy] = useState(null);
  const [enemyIndex, setEnemyIndex] = useState(null);
  const [enemyName, setEnemyName] = useState("");
  const [enemyAttacks, setEnemyAttacks] = useState([]);

  const [selectionArray, setSelectionArray] = useState([]);
  const [matchAttacks, setMatchAttacks] = useState([]);

  const [attackSelected0, setAttackSelected0] = useState(false);
  const [attackSelected1, setAttackSelected1] = useState(false);
  const [attackSelected2, setAttackSelected2] = useState(false);
  const [attackSelected3, setAttackSelected3] = useState(false);
  const [attackSelected4, setAttackSelected4] = useState(false);

  const [showEnemyButton, setShowEnemyButton] = useState(false);

  const [showCanvaMap, setShowCanvaMap] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const [characterIndex, setCharacterIndex] = useState(null);
  const [pic, setPic] = useState(null);
  const [canvas, setCanvas] = useState(canvaVariables);
  const [enemySelected, setEnemySelected] = useState(false);

  useEffect(() => {
    console.log(enemy);
    console.log(enemyIndex);
    console.log(enemyName);
    console.log(enemyAttacks);
    console.log(selectionArray);
  }, [enemy, enemyIndex, enemyAttacks, selectionArray]);

  const charactersHidding = () => {
    if (selected) {
      setCharShowing(false);
      setShowCanvaMap(true);
    }
    console.log(enemyIMGArraray)
  };

  /* const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; */

  const getEnemyCharacter = () => {
    //const index = randomIntFromInterval(0, characters.length - 1);
    setEnemyCharacterSelected(false);
    setShowResults(true);
    /* setEnemyIndex(index);
    setEnemy(characters[index]);
    setEnemyName(characters[index].name); */
    setEnemyAttacks(
      characters[enemyIndex].attacks
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  const playAgain = () => {
    setCharacter("");
    setSelected(false);
    setCharShowing(true);
    setCharAttacks([]);
    setEnemyCharacterSelected(false);
    setEnemy(null);
    setEnemyIndex(null);
    setEnemyName("");
    setEnemyAttacks([]);
    setSelectionArray([]);
    setMatchAttacks([]);
    setShowEnemyButton(false);
    setAttackSelected0(false);
    setAttackSelected1(false);
    setAttackSelected2(false);
    setAttackSelected3(false);
    setAttackSelected4(false);
    setShowCanvaMap(false);
    setShowResults(false);
    setCanvas(canvaVariables);
    setEnemySelected(false);
    selecArray = [];
  };

  const mapHiding = () => {
    setShowCanvaMap(false)
    setEnemyCharacterSelected(true);
  }

  return (
    <>
      <ImageBg />
      <Characters
        characters={characters}
        character={character}
        setCharacter={setCharacter}
        setSelected={setSelected}
        charShowing={charShowing}
        charactersHidding={charactersHidding}
        setCharAttacks={setCharAttacks}
        characterIndex={characterIndex}
        setCharacterIndex={setCharacterIndex}
        pic={pic}
        setPic={setPic}
      />
      <Map
        charShowing={charShowing}
        showCanvaMap={showCanvaMap}
        setShowCanvaMap={setShowCanvaMap}
        mapHiding={mapHiding}
        characters={characters}
        characterIndex={characterIndex}
        pic={pic}
        canvas={canvas}
        setCanvas={setCanvas}
        enemyIMGArraray={enemyIMGArraray}
        setEnemyIndex={setEnemyIndex}
        setEnemy={setEnemy}
        enemyName={enemyName}
        setEnemyName={setEnemyName}
        enemySelected={enemySelected}
        setEnemySelected={setEnemySelected}
      />
      <Attacks
        getEnemyCharacter={getEnemyCharacter}
        enemyAttacks={enemyAttacks}
        setEnemyAttacks={setEnemyAttacks}
        enemyIndex={enemyIndex}
        setEnemyIndex={setEnemyIndex}
        enemyCharacterSelected={enemyCharacterSelected}
        setEnemyCharacterSelected={setEnemyCharacterSelected}
        characters={characters}
        charShowing={charShowing}
        charAttacks={charAttacks}
        character={character}
        matchAttacks={matchAttacks}
        setMatchAttacks={setMatchAttacks}
        setSelectionArray={setSelectionArray}
        selecArray={selecArray}
        attackSelected0={attackSelected0}
        attackSelected1={attackSelected1}
        attackSelected2={attackSelected2}
        attackSelected3={attackSelected3}
        attackSelected4={attackSelected4}
        showEnemyButton={showEnemyButton}
        setAttackSelected0={setAttackSelected0}
        setAttackSelected1={setAttackSelected1}
        setAttackSelected2={setAttackSelected2}
        setAttackSelected3={setAttackSelected3}
        setAttackSelected4={setAttackSelected4}
        setShowEnemyButton={setShowEnemyButton}
      />
      <Result
        enemy={enemy}
        enemyName={enemyName}
        enemyIndex={enemyIndex}
        setEnemyIndex={setEnemyIndex}
        enemyCharacterSelected={enemyCharacterSelected}
        setEnemyCharacterSelected={setEnemyCharacterSelected}
        characters={characters}
        enemyAttacks={enemyAttacks}
        selectionArray={selectionArray}
        matchAttacks={matchAttacks}
        character={character}
        playAgain={playAgain}
        showResults={showResults}
        setShowResults={setShowResults}
      />
    </>
  );
}

export default App;
