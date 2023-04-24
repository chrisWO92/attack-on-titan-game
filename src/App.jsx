import React, { useState } from "react";
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
import { useEffect } from "react";

let enemiesImagesArray = []

let userAttacksArray = []

let playerId = null

let heightWeNeed
let widthMap = window.innerWidth - 30

if (window.matchMedia("(orientation: portrait)").matches) {
  if (window.innerHeight > 700 && window.innerHeight <= 1100) {
    if (window.innerWidth < 600 && window.innerWidth >= 500) {
      widthMap = window.innerWidth - 60
    } else if ( window.innerWidth < 500) {
      widthMap = window.innerWidth - 20
    } else {
      widthMap = 700
    }    
  }
  if (window.innerHeight > 1100) {
    if (window.innerWidth < 1000) {
      widthMap = window.innerWidth - 100
    } else {
      widthMap = 900
    }
  }
}

if (window.matchMedia("(orientation: landscape)").matches) {
  if (window.innerWidth > 1200) {
    widthMap = 700
  } else {
    widthMap = 500
  }
}

heightWeNeed = widthMap * 600/800

const charactersData = [
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

  const [charactersShowing, setCharactersShowing] = useState(true);

  const [userCharacterName, setUserCharacterName] = useState("");
  const [characterSelected, setCharacterSelected] = useState(false);
  const [charAttacks, setCharAttacks] = useState([]);
  const [userId, setUserId] = useState('');

  const [showAttacks, setShowAttacks] = useState(false);
  const [enemyIndex, setEnemyIndex] = useState(null);
  const [enemyName, setEnemyName] = useState("");
  const [enemyAttacks, setEnemyAttacks] = useState([]);
  const [enemySelected, setEnemySelected] = useState(false);

  const [userAttacks, setUserAttacks] = useState([]);
  const [attackSelected0, setAttackSelected0] = useState(false);
  const [attackSelected1, setAttackSelected1] = useState(false);
  const [attackSelected2, setAttackSelected2] = useState(false);
  const [attackSelected3, setAttackSelected3] = useState(false);
  const [attackSelected4, setAttackSelected4] = useState(false);

  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [showCanvaMap, setShowCanvaMap] = useState(false);
  const [canvas, setCanvas] = useState({
    width: 60,
    height: 50,
    speedX: 0,
    speedY: 0,
  });

  //endpoint consumption
  const join = () => {
    fetch('http://localhost:8080/join')
      .then(res => {
        if (res.ok) {
          res.text()
            .then((res) => {
              playerId = res
              //console.log(playerId)
              //shows the id
            })
        }
      })
  }

  const selectTitan = (titName) => {
    fetch(`http://localhost:8080/attack-on-titan/${playerId}`, {
      //when doing a post request it's need the method specification, header specification, and body info it's being sent to server
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titan: titName,
        img: charactersData[userId].picture
      })
      //now we're not going to use .then becuase we aren't expecting a response, but later on we're going to use it
    })
  }

  useEffect(() => {
    if (characterSelected){
      join()
    }
  }, [characterSelected])


/*   const updateUserPosition = () => {    
    for (let i of charactersData) {
      if (i.name === userCharacterName) {
        return [i.x, i.y]
      }      
    }
  } */

  function randomFromInterval(min, max) { // min and max included 
    return (Math.random() * (max - min + 1) + min)
  }

  const charactersHidding = () => {
    console.log(charactersData)
    if (characterSelected) {
      setCharactersShowing(false);
      setShowCanvaMap(true);
      selectTitan(userCharacterName)
      //let position = updateUserPosition();
      setCanvas((canvas) => ({
        ...canvas,
        x: randomFromInterval(0, widthMap - canvas.width),
        y: randomFromInterval(0, heightWeNeed - canvas.height)
      }));
    }
  };


  const getEnemyCharacter = () => {
    setShowAttacks(false);
    setShowResults(true);
    setEnemyAttacks(
      charactersData[enemyIndex].attacks
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  };

  const playAgain = () => {
    setUserCharacterName("");
    setCharacterSelected(false);
    setCharactersShowing(true);
    setCharAttacks([]);
    setShowAttacks(false);
    setEnemyIndex(null);
    setEnemyName("");
    setEnemyAttacks([]);
    setUserAttacks([]);
    setShowPlayButton(false);
    setAttackSelected0(false);
    setAttackSelected1(false);
    setAttackSelected2(false);
    setAttackSelected3(false);
    setAttackSelected4(false);
    setShowCanvaMap(false);
    setShowResults(false);
    setCanvas({
      x: 3,
      y: 3,
      width: 60,
      height: 50,
      speedX: 0,
      speedY: 0,
    });
    setEnemySelected(false);
    userAttacksArray = [];
  };

  const mapHiding = () => {
    setShowCanvaMap(false)
    setShowAttacks(true);
    for (let i = 0; i < charactersData.length; i++) {
      if (charactersData[i].name === enemyName) {
        setEnemyIndex(charactersData[i].id)
      }
    }
  }

  return (
    <>
      <ImageBg />
      <Characters
        charactersData={charactersData}
        userCharacterName={userCharacterName}
        setUserCharacterName={setUserCharacterName}
        setCharacterSelected={setCharacterSelected}
        charactersShowing={charactersShowing}
        charactersHidding={charactersHidding}
        setCharAttacks={setCharAttacks}
        userId={userId}
        setUserId={setUserId}
        selectTitan={selectTitan}
      />
      <Map
        charactersShowing={charactersShowing}
        showCanvaMap={showCanvaMap}
        mapHiding={mapHiding}
        charactersData={charactersData}
        userId={userId}
        canvas={canvas}
        setCanvas={setCanvas}
        enemiesImagesArray={enemiesImagesArray}
        setEnemyIndex={setEnemyIndex}
        setEnemyName={setEnemyName}
        enemyName={enemyName}
        enemySelected={enemySelected}
        setEnemySelected={setEnemySelected}
        playerId={playerId}
        //sendPosition={sendPosition}
        userCharacterName={userCharacterName}
        heightWeNeed={heightWeNeed}
        widthMap={widthMap}
        enemyIndex={enemyIndex}
      />
      <Attacks
        charactersShowing={charactersShowing}
        charAttacks={charAttacks}
        userCharacterName={userCharacterName}
        showAttacks={showAttacks}
        setUserAttacks={setUserAttacks}
        getEnemyCharacter={getEnemyCharacter}
        userAttacksArray={userAttacksArray}
        attackSelected0={attackSelected0}
        attackSelected1={attackSelected1}
        attackSelected2={attackSelected2}
        attackSelected3={attackSelected3}
        attackSelected4={attackSelected4}
        showPlayButton={showPlayButton}
        setAttackSelected0={setAttackSelected0}
        setAttackSelected1={setAttackSelected1}
        setAttackSelected2={setAttackSelected2}
        setAttackSelected3={setAttackSelected3}
        setAttackSelected4={setAttackSelected4}
        setShowPlayButton={setShowPlayButton}
      />
      <Result
        enemyName={enemyName}
        enemyAttacks={enemyAttacks}
        userAttacks={userAttacks}
        userCharacterName={userCharacterName}
        playAgain={playAgain}
        showResults={showResults}
      />
    </>
  );
}

export default App;
