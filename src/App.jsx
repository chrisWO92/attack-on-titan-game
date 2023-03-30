import React, { useEffect, useState } from 'react'
import './App.css';
import Characters from './components/characters/Characters';
import VideoBg from './components/videoBg/VideoBg';

function App() {

  const [character, setCharacter] = useState('');
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    console.log(character)
    console.log(selected)
  }, [character])

  return (
    <>
      <VideoBg />
      <Characters character={character} setCharacter={setCharacter} setSelected={setSelected}/>
      <p style={{display: 'none'}}>
      Tengo que desarrollar un juego en el que se puedan seleccionar unos personajes (en principio tres). Estos personajes tienen un nombre, una imágen y una cantidad de ataques determinada según su "naturaleza". Los personajes deben aparecer en pantalla en forma de tarjetas clickeables (puede funcionar un input con radio buttons, pero sin los radios, sólo los labels), y al hacer click en alguna y hacer click en submit, deben aparecer en pantalla los ataques disponibles de ese personaje (5 en total), para que el usuario elija el orden en que quiere usar estos 5 ataques. Luego, de forma automática se elegirá el personaje del enemigo y el orden de sus ataques, para luego enfrentar por orden cada ataque. En este sentido, el jugador (usuario o máquina) que haya tenido más victorias, será el ganador y la app deberá mostrar un mensaje en consecuencia. 
      </p>
      <button id='continue'>Continue</button>
    </>
  );
}

export default App;
