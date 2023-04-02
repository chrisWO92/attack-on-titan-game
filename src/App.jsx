import React, { useEffect, useState } from "react";
import "./App.css";
import Attacks from "./components/attacks/Attacks";
import Characters from "./components/characters/Characters";
import VideoBg from "./components/videoBg/VideoBg";

import IMG1 from "./assets/attack-on-titan.png";
import IMG2 from "./assets/female-titan.png";
import IMG3 from "./assets/armored-titan.png";
import IMG4 from "./assets/colossal-titan.png";
import IMG5 from "./assets/beast-titan.png";
import IMG6 from "./assets/warhammer-titan.png";
import IMG7 from "./assets/jaw-titan.png";
import IMG8 from "./assets/cart-titan.png";
import Result from "./components/result/Result";

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
  },
];

function App() {
  const [character, setCharacter] = useState("");
  const [selected, setSelected] = useState(false);
  const [charShowing, setCharShowing] = useState(true);
  const [charAttacks, setCharAttacks] = useState([]);
  const [enemyCharacterSelected, setEnemyCharacterSelected] = useState(false);
  const [enemyIndex, setEnemyIndex] = useState(null);
  const [enemyAttacks, setEnemyAttacks] = useState([]);

  const [selectionArray, setSelectionArray] = useState([]);
  const [matchAttacks, setMatchAttacks] = useState([]);

  useEffect(() => {
    console.log(character);
    console.log(selected);
    console.log(charShowing);
  }, [character, charShowing]);

  const charactersHidding = () => {
    if (selected) {
      setCharShowing(false);
    }
  };

  const randomEnemyAttacks = enemyAttacks.map(value => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)

  const match = () => {
    let array = []
    for (let i = 0; i < randomEnemyAttacks.length; i++){
      array.push([selectionArray[i], randomEnemyAttacks[i]])
    }
    return array
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getEnemyCharacter = () => {
    const index = randomIntFromInterval(0, characters.length - 1);
    setEnemyCharacterSelected(true);
    setEnemyIndex(index);
    setEnemyAttacks(characters[index].attacks);
    const randomEnemyAttacks = enemyAttacks.map(value => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)
    setMatchAttacks(match())
    console.log(randomEnemyAttacks)
    console.log(match())
  };

  return (
    <>
      <VideoBg />
      <Characters
        characters={characters}
        character={character}
        setCharacter={setCharacter}
        setSelected={setSelected}
        charShowing={charShowing}
        charactersHidding={charactersHidding}
        setCharAttacks={setCharAttacks}
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
      />
      <Result
        enemyIndex={enemyIndex}
        setEnemyIndex={setEnemyIndex}
        enemyCharacterSelected={enemyCharacterSelected}
        setEnemyCharacterSelected={setEnemyCharacterSelected}
        characters={characters}
        enemyAttacks={enemyAttacks}
        selectionArray={selectionArray}
        matchAttacks={matchAttacks}
      />
      <p style={{ display: "none" }}>
        Tengo que desarrollar un juego en el que se puedan seleccionar unos
        personajes (en principio tres). Estos personajes tienen un nombre, una
        imágen y una cantidad de ataques determinada según su "naturaleza". Los
        personajes deben aparecer en pantalla en forma de tarjetas clickeables
        (puede funcionar un input con radio buttons, pero sin los radios, sólo
        los labels), y al hacer click en alguna y hacer click en submit, deben
        aparecer en pantalla los ataques disponibles de ese personaje (5 en
        total), para que el usuario elija el orden en que quiere usar estos 5
        ataques. Luego, de forma automática se elegirá el personaje del enemigo
        y el orden de sus ataques, para luego enfrentar por orden cada ataque.
        En este sentido, el jugador (usuario o máquina) que haya tenido más
        victorias, será el ganador y la app deberá mostrar un mensaje en
        consecuencia.
      </p>
    </>
  );
}

export default App;
