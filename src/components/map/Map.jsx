import React, { useEffect, useRef } from "react";
import "./map.css";
import mapBGsrc from '../../assets/map.png'

const Map = ({ charShowing, showCanvaMap, setShowCanvaMap, mapHiding, characters, characterIndex, pic }) => {

  const canvasRef = useRef();

  let mapBG = new Image();
  mapBG.src = mapBGsrc;

  let charIMG = new Image();
  charIMG.src = pic

  useEffect(() => {
    const map = canvasRef.current
    const lienzo = map.getContext("2d");
    lienzo.clearRect(0, 0, map.width, map.height)
    lienzo.fillStyle = '#fff'
    //lienzo.fillRect(0, 60, 30, 20)
    lienzo.drawImage(
      mapBG,
      0,
      0,
      map.width,
      map.height
    )
    lienzo.drawImage(
      charIMG,
      20,
      20,
      50,
      50
    )
    console.log(mapBG)
    console.log(charIMG)
  })

  


  /* const drawCanvas = () => {
    lienzo.clearRect(0, 0, canvasRef.width, canvasRef.height);
    lienzo.drawImage(mapBG, 0, 0, canvasRef.width, canvasRef.height);
    lienzo.drawImage(
      titanImageSelected,
      titanSelected.x,
      titanSelected.y,
      titanSelected.width,
      titanSelected.height
    );
  }; */

  return (
    <>
      <div className={
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
          <button id="up" className="move-button">Up</button>
          <button id="down" className="move-button">Down</button>
          <button id="right" className="move-button">Right</button>
          <button id="left" className="move-button">Left</button>
        </div>
        <button id='map-button' onClick={mapHiding}>Continue</button>
      </div>
    </>
  );
};

export default Map;
