import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import IMG1 from "./assets/attack-on-titan.png";
import IMG2 from "./assets/female-titan.png";
import IMG3 from "./assets/armored-titan.png";
import IMG4 from "./assets/colossal-titan.png";
import IMG5 from "./assets/beast-titan.png";
import IMG6 from "./assets/warhammer-titan.png";
import IMG7 from "./assets/jaw-titan.png";
import IMG8 from "./assets/cart-titan.png";

let canvaDefaultVariables = {
  x: 3,
  y: 3,
  width: 60,
  height: 50,
  speedX: 0,
  speedY: 0,
};

/* function randomFromInterval(min, max) { // min and max included 
  return (Math.random() * (max - min + 1) + min)
} */

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

const createImageElement = (src) => {
  let image = new Image()
  image.src = src
  return image
}
/* const charactersData = [
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
  },
]; */

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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
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
    //x: randomFromInterval(0, widthMap - canvaDefaultVariables.width),
    //y: randomFromInterval(0, heightWeNeed - canvaDefaultVariables.height),
  },
];

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App 
      charactersData={charactersData}
      heightWeNeed={heightWeNeed}
      widthMap={widthMap}
    />
  </React.StrictMode>
);
