import React, { useEffect, useState } from "react";
import "./imagebg.css";
import DesktopBg from "./DesktopBg";
import MobileBg from "./MobileBg";

const ImageBg = () => {
  const [portraitOrientation, setPortraitOrientation] = useState(true);

  const settingScreen = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      console.log("orientation: portrait");
      setPortraitOrientation(true);
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      console.log("orientation: landscape");
      setPortraitOrientation(false);
    }
  };

  useEffect(() => {
    window.addEventListener("orientationchange", settingScreen);
  }, []);

  return <>{portraitOrientation ? <DesktopBg /> : <MobileBg />}</>;
};

export default ImageBg;
