import React, { useState } from "react";
import "./App.css";
import Attacks from "./components/attacks/Attacks";
import Characters from "./components/characters/Characters";
import ImageBg from "./components/ImageBg/ImageBg";
import Map from "./components/map/Map";

/* import IMG1 from "./assets/attack-on-titan.png";
import IMG2 from "./assets/female-titan.png";
import IMG3 from "./assets/armored-titan.png";
import IMG4 from "./assets/colossal-titan.png";
import IMG5 from "./assets/beast-titan.png";
import IMG6 from "./assets/warhammer-titan.png";
import IMG7 from "./assets/jaw-titan.png";
import IMG8 from "./assets/cart-titan.png"; */
import Result from "./components/result/Result";
import { useEffect } from "react";

let enemiesImagesArray = []

let userAttacksArray = []

let playerId = null




function App({canvaDefaultVariables, charactersData, heightWeNeed, widthMap}) {

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
