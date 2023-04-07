import React, { useEffect, useRef } from "react";
import "./map.css";

const Map = ({ charShowing, showCanvaMap, setShowCanvaMap, mapHiding }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const lienzo = canvasRef.current.getContext("2d");
    lienzo.fillStyle = '#000000'
    lienzo.fillRect(0, 0, 200, 230)
  })

  
  let mapBG = new Image();
  mapBG.src = "./assets/map.png";

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
        <button id='map-button' onClick={mapHiding}>Continue</button>
      </div>
    </>
  );
};

export default Map;
