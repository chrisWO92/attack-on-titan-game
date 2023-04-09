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

let interval

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
  const [isMouseHolding, setIsMouseHolding] = useState(false)
  const [isKeyHolding, setIsKeyHolding] = useState(false)
  const [order, setOrder] = useState('')
  const [key, setKey] = useState('')


  let mapBG = new Image();
  mapBG.src = mapBGsrc;

  let charIMG = new Image();
  charIMG.src = pic;


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

  const repeat = (what) => {
    interval = setInterval(what, 50);
  };

  const keyPressed = (e) => {
    //setIsMouseHolding(false)
    //setKey(e.key)
    //setIsKeyHolding(true)
    switch (e.key) {
        case 'ArrowRight':
            move('right')
            break
        case 'ArrowLeft':
           /*  setIsKeyHolding(true)
            setKey('ArrowLeft') */
            move('left')
            break
        case 'ArrowUp':
            /* setIsKeyHolding(true)
            setKey('ArrowUp') */
            move('up')
            break
        case 'ArrowDown':
            /* setIsKeyHolding(true)
            setKey('ArrowDown') */
            move('down')
            break
        default:
            break;
    }

  }

  useEffect(() => {
    drawCanvas()
  })

  useEffect(() => {
    document.addEventListener('keydown', keyPressed)
    document.addEventListener('keyup', stop)
  }, [])

  useEffect(() => {

    if (isMouseHolding) {

      if (order === 'up') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 0,
            speedY: -5
          }
          ))
        })
      } 
      else if (order === 'down') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 0,
            speedY: 5
          }))
        })
      }
      else if (order === 'right') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 5,
            speedY: 0
          }))
        })
      }
      else if (order === 'left') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: -5,
            speedY: 0
          }))
        })
      }
    } else {
      stop();
    }

  }, [isMouseHolding]);

 /*  useEffect(() => {

    if (isKeyHolding) {
      if (key === 'ArrowUp') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 0,
            speedY: -5
          }
          ))
        })
      } 
      else if (key === 'ArrowDown') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 0,
            speedY: 5
          }))
        })
      }
      else if (key === 'ArrowRight') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 5,
            speedY: 0
          }))
        })
      }
      else if (key === 'ArrowLeft') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: -5,
            speedY: 0
          }))
        })
      }
    } else {
      keyUp();
    }
  }, [isKeyHolding]); */

  const move = (or) => {
    setIsMouseHolding(true)
    setOrder(or)
  };

  function stop() {
    setOrder('')
    setIsMouseHolding(false)
    clearInterval(interval);  
    setCanvas(canvas => ({
      ...canvas,
      speedX: 0,
      speedY: 0
    }))
  }

 /*  function keyUp() {
    setKey('')
    setIsKeyHolding(false)
    clearInterval(interval);    
    setCanvas(canvas => ({
      ...canvas,
      speedX: 0,
      speedY: 0
    }))
  } */

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
        <canvas id="map" ref={canvasRef}></canvas>
        <div id="buttons">
          <button id="up" className="move-button" onMouseDown={() => move('up')} onMouseUp={stop}>
            Up
          </button>
          <button id="down" className="move-button" onMouseDown={() => move('down')} onMouseUp={stop}>
            Down
          </button>
          <button id="right" className="move-button" onMouseDown={() => move('right')} onMouseUp={stop}>
            Right
          </button>
          <button id="left" className="move-button" onMouseDown={() => move('left')} onMouseUp={stop}>
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
