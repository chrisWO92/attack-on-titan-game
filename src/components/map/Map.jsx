import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import imgChar from "../../assets/armored-titan.png";
import IMG1 from "../../assets/attack-on-titan.png";
import IMG3 from "../../assets/armored-titan.png";
import IMG2 from "../../assets/female-titan.png";
import IMG4 from "../../assets/colossal-titan.png";
import IMG5 from "../../assets/beast-titan.png";
import IMG6 from "../../assets/warhammer-titan.png";
import IMG7 from "../../assets/jaw-titan.png";
import IMG8 from "../../assets/cart-titan.png";
import mapBGsrc from "../../assets/map.png";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

let interval;
let enemiesArr = []

const Map = ({
  charactersShowing,
  showCanvaMap,
  mapHiding,
  charactersData,
  userId,
  canvas,
  setCanvas,
  enemiesImagesArray,
  setEnemyIndex,
  setEnemyName,
  enemyName,
  enemySelected,
  setEnemySelected,
  playerId,
  //sendPosition,
  userCharacterName,
  heightWeNeed,
  widthMap,
  enemyIndex
}) => {
  const canvasRef = useRef();

  const [isMouseHolding, setIsMouseHolding] = useState(false);
  const [order, setOrder] = useState("");
  //const [enemiesArr, setEnemiesArr] = useState([])

  let mapBG = new Image();
  mapBG.src = mapBGsrc;

  let charIMG = new Image();
  switch (userId) {
    case "0":
      charIMG.src = IMG1;
      break;
    case "1":
      charIMG.src = IMG2;
      break;
    case "2":
      charIMG.src = IMG3;
      break;
    case "3":
      charIMG.src = IMG4;
      break;
    case "4":
      charIMG.src = IMG5;
      break;
    case "5":
      charIMG.src = IMG6;
      break;
    case "6":
      charIMG.src = IMG7;
      break;
    case "7":
      charIMG.src = IMG8;
      break;
    default:
      break;
  }

  let enemyIMG = [];

  for (let i = 0; i < enemiesImagesArray.length; i++) {
    let img = new Image();
    img.src = enemiesImagesArray[i].pic;
    enemyIMG.push(img);
  }

  const drawCanvas = () => {
    const map = canvasRef.current;
    map.width = widthMap;
    map.height = heightWeNeed;
    const lienzo = map.getContext("2d");
    lienzo.drawImage(mapBG, 0, 0, map.width, map.height);
  };

  const drawUser = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    canvas.x = canvas.x + canvas.speedX;
    canvas.y = canvas.y + canvas.speedY;
    lienzo.drawImage(
      charIMG,
      canvas.x, 
      canvas.y, 
      canvas.width, 
      canvas.height
    );
  };

  const drawEnemy = (enemy) => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    //lienzo.clearRect(0, 0, map.width, map.height);
    lienzo.drawImage(
      enemy.pic,
      enemy.x,
      enemy.y,
      canvas.width,
      canvas.height
    );
  };

  const drawEnemies = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    //lienzo.clearRect(0, 0, map.width, map.height);
    for (let i = 0; i < enemiesArr.length; i++) {
      let img = new Image()
      img.src = enemiesArr[i].pic
      lienzo.drawImage(
        img,
        enemiesArr[i].x,
        enemiesArr[i].y,
        canvas.width,
        canvas.height
      );
    }
  };

  const clearCanvas = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    lienzo.clearRect(0, 0, map.width, map.height);
  };

  useEffect(() => {
    drawCanvas()
    sendEnemiesPosition(canvas.x, canvas.y)
    drawEnemies()
    console.log('enemiesArr')
    console.log(enemiesArr)
    for (let i = 0; i < enemiesArr.length; i++) {
      if (canvas.speedX !==0 || canvas.speedY !==0) {
        colission(enemiesArr[i]);
      }
    }
  });

  useEffect(() => {
    drawCanvas();
    drawUser();
    drawEnemies()
    sendEnemiesPosition(canvas.x, canvas.y)
  }, [canvas]);

  const sendEnemiesPosition = (x, y) => {
    fetch(`http://localhost:8080/attack-on-titan/${playerId}/enemiesposition`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        x,
        y
      })
    })
      .then((res) => {
        if (res.ok){
          res.json()
            .then(({enemies}) => {
              enemiesArr = enemies
              console.log(enemies)
            })
        }
      })
  }

  const sendUserPosition = (x, y) => {
    fetch(`http://localhost:8080/attack-on-titan/${playerId}/userposition`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        x,
        y
      })
    })
      .then((res) => {
        if (res.ok){
          res.json()
            .then(({user}) => {      
              console.log(user)             
                for (let i = 0; i < charactersData.length; i++) {
                  if (user !== null) {
                    const nameEnemy = user[0].titan.name
                    if (nameEnemy === charactersData[i].name) {
                      let img = new Image()
                      img.src = charactersData[i].picture
                      let userArray = []
                      userArray = {
                        pic: img, 
                        x: user[0].x,
                        y: user[0].y, 
                        name: charactersData[i].name, 
                        id: charactersData[i].id
                      }
                      drawEnemy(userArray)                      
                    }
                  }
                }
            })
        }
      })
  }

  const colission = (enemy) => {
    const bottomSideCharacter = canvas.y + canvas.height;
    const topSideCharacter = canvas.y;
    const rightSideCharacter = canvas.x + canvas.width;
    const leftSideCharacter = canvas.x;

    const topSideEnemy = enemy.y;
    const bottomSideEnemy = enemy.y + canvas.height;
    const leftSideEnemy = enemy.x;
    const rightSideEnemy = enemy.x + canvas.width;

    if (
      bottomSideCharacter < topSideEnemy ||
      topSideCharacter > bottomSideEnemy ||
      rightSideCharacter < leftSideEnemy ||
      leftSideCharacter > rightSideEnemy
    ) {
      return;
    }
    setEnemySelected(true);
    setEnemyName(enemy.titan.name);
  };

  const repeat = (what) => {
    interval = setInterval(what, 50);
  };

  const keyPressed = (e) => {
    switch (e.key) {
      case "ArrowRight":
        move("right");
        break;
      case "ArrowLeft":
        move("left");
        break;
      case "ArrowUp":
        move("up");
        break;
      case "ArrowDown":
        move("down");
        break;
      default:
        break;
    }
  };

  const move = (or) => {
    setIsMouseHolding(true);
    setOrder(or);
  };

  function stop() {
    setOrder("");
    setIsMouseHolding(false);
    clearInterval(interval);
    setCanvas((canvas) => ({
      ...canvas,
      speedX: 0,
      speedY: 0,
    }));
  }


  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", stop);
    drawCanvas();
  }, []);

  useEffect(() => {
    if (isMouseHolding) {
      if (order === "up") {
        repeat(() => {
          setCanvas((canvas) => ({
            ...canvas,
            speedY: -5,
          }));
        });
      } else if (order === "down") {
        repeat(() => {
          setCanvas((canvas) => ({
            ...canvas,
            speedY: 5,
          }));
        });
      } else if (order === "right") {
        repeat(() => {
          setCanvas((canvas) => ({
            ...canvas,
            speedX: 5,
          }));
        });
      } else if (order === "left") {
        repeat(() => {
          setCanvas((canvas) => ({
            ...canvas,
            speedX: -5,
          }));
        });
      }
    } else {
      stop();
    }
    
  }, [isMouseHolding]);

  return (
    <>
      <div
        className={
          charactersShowing
            ? "displayNone"
            : showCanvaMap
            ? "canvaMap"
            : "displayNone"
        }
      >
        <canvas id="map" ref={canvasRef}></canvas>
        <div id="buttons" className="buttonsFlex">
          <div className="first-line">
            <button
              id="up"
              className="move-button"
              onMouseDown={() => move("up")}
              onMouseUp={stop}
            >
              <AiOutlineArrowUp />
            </button>
          </div>
          <div className="second-line">
            <button
              id="left"
              className="move-button"
              onMouseDown={() => move("left")}
              onMouseUp={stop}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              id="down"
              className="move-button"
              onMouseDown={() => move("down")}
              onMouseUp={stop}
            >
              <AiOutlineArrowDown />
            </button>
            <button
              id="right"
              className="move-button"
              onMouseDown={() => move("right")}
              onMouseUp={stop}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <button
          id="map-button"
          className={enemySelected ? "mapButtonFlex" : "displayNone"}
          onClick={mapHiding}
        >
          Play Against: {enemyName}
        </button>
      </div>
    </>
  );
};

export default Map;
