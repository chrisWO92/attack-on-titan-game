import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import mapBGsrc from "../../assets/map.png";

let canvaVariables = {
  x: 3,
  y: 3,
  width: 50,
  height: 50,
  speedX: 0,
  speedY: 0,
};

const Map = ({
  charShowing,
  showCanvaMap,
  setShowCanvaMap,
  mapHiding,
  characters,
  characterIndex,
  pic,
}) => {

  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(canvaVariables)

/*   setCanvas(canvas => ({
    ...canvas,
    ...canvaVariables
  })) */

  let mapBG = new Image();
  mapBG.src = mapBGsrc;

  let charIMG = new Image();
  charIMG.src = pic;
  //let interval

 /*  const map = canvasRef.current;
  const lienzo = map.getContext("2d"); */

  const drawCanvas = () => {
    const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    canvas.x = canvas.x + canvas.speedX;
    canvas.y = canvas.y + canvas.speedY;
    lienzo.clearRect(0, 0, map.width, map.height);
    lienzo.drawImage(mapBG, 0, 0, map.width, map.height);
    lienzo.drawImage(
      charIMG,
      canvas.x,
      canvas.y,
      canvas.width,
      canvas.height
    );
  };

  useEffect(() => {
    /* let interval = setInterval(drawCanvas, 50) */
    drawCanvas()
    /* const map = canvasRef.current;
    const lienzo = map.getContext("2d");
    canvas.x = canvas.x + canvas.speedX;
    canvas.y = canvas.y + canvas.speedY;
    lienzo.clearRect(0, 0, map.width, map.height);
    lienzo.drawImage(mapBG, 0, 0, map.width, map.height);
    lienzo.drawImage(
      charIMG,
      canvas.x,
      canvas.y,
      canvas.width,
      canvas.height
    );
    console.log(canvas.x) */
  });

  const moveRight = () => {
    setCanvas(canvas => ({
      ...canvas,
      speedX: 5,
      speedY: 0
    }))
  };

  const moveLeft = () => {
    setCanvas(canvas => ({
      ...canvas,
      speedX: -5,
      speedY: 0
    }))
  };

  const moveUp = () => {
    setCanvas(canvas => ({
      ...canvas,
      speedX: 0,
      speedY: -5
    }))
  };

  const moveDown = () => {
    setCanvas(canvas => ({
      ...canvas,
      speedX: 0,
      speedY: 5
    }))
  };

  const stopMove = () => {
    setCanvas(canvas => ({
      ...canvas,
      speedX: 0,
      speedY: 0
    }))
  };

  return (
    <>
      <div
        className={
          charShowing
            ? "displayNone"
            : showCanvaMap
            ? "canvaMap"
            : "displayNone"
        }
      >
        <canvas id="map" ref={canvasRef}>
          {/* {drawCanvas} */}
        </canvas>
        <div id="buttons">
          <button id="up" className="move-button" onClick={moveUp} onMouseDown={moveUp} onMouseUp={stopMove}>
            Up
          </button>
          <button id="down" className="move-button" onClick={moveDown} onMouseDown={moveDown} onMouseUp={stopMove}>
            Down
          </button>
          <button id="right" className="move-button" onClick={moveRight} onMouseDown={moveRight} onMouseUp={stopMove}>
            Right
          </button>
          <button id="left" className="move-button" onClick={moveLeft} onMouseDown={moveLeft} onMouseUp={stopMove}>
            Left
          </button>
        </div>
        <button id="map-button" onClick={mapHiding}>
          Continue
        </button>
      </div>
    </>
  );
};

export default Map;
