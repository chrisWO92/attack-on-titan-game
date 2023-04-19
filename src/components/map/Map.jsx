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
  sendPosition
}) => {
  const canvasRef = useRef();

  const [isMouseHolding, setIsMouseHolding] = useState(false);
  const [order, setOrder] = useState("");

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

  const drawEnemies = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    for (let i = 0; i < enemyIMG.length; i++) {
      lienzo.drawImage(
        enemyIMG[i],
        enemiesImagesArray[i].x,
        enemiesImagesArray[i].y,
        canvas.width,
        canvas.height
      );
    }
  };

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
    setEnemyIndex(enemy.id);
    setEnemyName(charactersData[enemy.id].name);
  };

  

  const drawCanvas = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    canvas.x = canvas.x + canvas.speedX;
    canvas.y = canvas.y + canvas.speedY;
    lienzo.clearRect(0, 0, map.width, map.height);
    lienzo.drawImage(mapBG, 0, 0, map.width, map.height);
    lienzo.drawImage(charIMG, canvas.x, canvas.y, canvas.width, canvas.height);
    sendPosition(canvas.x, canvas.y)
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

  useEffect(() => {
    drawCanvas();
    drawEnemies();
    if (canvas.speedX || canvas.speedY) {
      for (let i = 0; i < enemiesImagesArray.length; i++) {
        colission(enemiesImagesArray[i]);
      }
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", stop);
    console.log(charIMG.src);
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
