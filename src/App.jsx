import React, { useEffect, useState } from 'react'
import './App.css';
import Attacks from './components/attacks/Attacks';
import Characters from './components/characters/Characters';
import VideoBg from './components/videoBg/VideoBg';

import IMG1 from "./assets/attack-on-titan.png";
import IMG2 from "./assets/female-titan.png";
import IMG3 from "./assets/armored-titan.png";
import IMG4 from "./assets/colossal-titan.png";
import IMG5 from "./assets/beast-titan.png";
import IMG6 from "./assets/warhammer-titan.png";
import IMG7 from "./assets/jaw-titan.png";
import IMG8 from "./assets/cart-titan.png";

const characters = [
  {
    id: "0",
    name: "Attack on Titan",
    picture: IMG1,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "1",
    name: "Female Titan",
    picture: IMG2,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "2",
    name: "Armored Titan",
    picture: IMG3,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "3",
    name: "Colossal Titan",
    picture: IMG4,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "4",
    name: "Beast Titan",
    picture: IMG5,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "5",
    name: "War Hammer Titan",
    picture: IMG6,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "6",
    name: "Jaw Titan",
    picture: IMG7,
    atacks: ["atack1", "atack2", "atack3"]
  },
  {
    id: "7",
    name: "Cart Titan",
    picture: IMG8,
    atacks: ["atack1", "atack2", "atack3"]
  },
]

function App() {

  const [character, setCharacter] = useState('');
  const [selected, setSelected] = useState(false);
  const [charShowing, setCharShowing] = useState(true);
  const [charAtacks, setCharAtacks] = useState([]);

  useEffect(() => {
    console.log(character)
    console.log(selected)
    console.log(charShowing)
  }, [character, charShowing])
  
  const charactersHidding = () => {
    if (selected){
      setCharShowing(false)
    }
  }

  return (
    <>
      <VideoBg />
      <Characters characters={characters} character={character} setCharacter={setCharacter} setSelected={setSelected} charShowing={charShowing} charactersHidding={charactersHidding} setCharAtacks={setCharAtacks}/>
      <Attacks characters={characters} charShowing={charShowing} charAtacks={charAtacks}/>
      <p style={{display: 'none'}}>
      Tengo que desarrollar un juego en el que se puedan seleccionar unos personajes (en principio tres). Estos personajes tienen un nombre, una imágen y una cantidad de ataques determinada según su "naturaleza". Los personajes deben aparecer en pantalla en forma de tarjetas clickeables (puede funcionar un input con radio buttons, pero sin los radios, sólo los labels), y al hacer click en alguna y hacer click en submit, deben aparecer en pantalla los ataques disponibles de ese personaje (5 en total), para que el usuario elija el orden en que quiere usar estos 5 ataques. Luego, de forma automática se elegirá el personaje del enemigo y el orden de sus ataques, para luego enfrentar por orden cada ataque. En este sentido, el jugador (usuario o máquina) que haya tenido más victorias, será el ganador y la app deberá mostrar un mensaje en consecuencia. 
      </p>
      
    </>
  );
}

export default App;
