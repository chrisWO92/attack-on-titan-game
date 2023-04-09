import React, { useEffect, useRef, useState } from "react";
import "./map.css";
import mapBGsrc from "../../assets/map.png";



let interval

const Map = ({
  charShowing,
  showCanvaMap,
  setShowCanvaMap,
  mapHiding,
  characters,
  characterIndex,
  pic,
  canvas, setCanvas
}) => {

  const canvasRef = useRef();
  
  const [isMouseHolding, setIsMouseHolding] = useState(false)
  const [order, setOrder] = useState('')


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
    switch (e.key) {
        case 'ArrowRight':
            move('right')
            break
        case 'ArrowLeft':
            move('left')
            break
        case 'ArrowUp':
            move('up')
            break
        case 'ArrowDown':
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
            speedY: -5
          }
          ))
        })
      } 
      else if (order === 'down') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedY: 5
          }))
        })
      }
      else if (order === 'right') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: 5,
          }))
        })
      }
      else if (order === 'left') {
        repeat(() => {
          setCanvas(canvas => ({
            ...canvas,
            speedX: -5,
          }))
        })
      }
    } else {
      stop();
    }
  }, [isMouseHolding]);

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
