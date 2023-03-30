import React from "react";
import "./characters.css";

import IMG1 from "../../assets/attack-on-titan.png";
import IMG2 from "../../assets/female-titan.png";
import IMG3 from "../../assets/armored-titan.png";
import IMG4 from "../../assets/colossal-titan.png";
import IMG5 from "../../assets/beast-titan.png";
import IMG6 from "../../assets/warhammer-titan.png";
import IMG7 from "../../assets/jaw-titan.png";
import IMG8 from "../../assets/cart-titan.png";

import Card from "../card/Card";

const characters = [
  {
    name: "Attack on Titan",
    picture: IMG1,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Female Titan",
    picture: IMG2,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Armored Titan",
    picture: IMG3,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Colossal Titan",
    picture: IMG4,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Beast Titan",
    picture: IMG5,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "War Hammer Titan",
    picture: IMG6,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Jaw Titan",
    picture: IMG7,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    name: "Cart Titan",
    picture: IMG8,
    attacks: ["attack1, attack2, attack3"],
  },
];

const Characters = () => {
  return (
    <>
      <h2>Select Your Titan</h2>
      <div id="characters">
        {characters &&
          characters.map(({ name, picture, attacks }) => {
            return <Card name={name} picture={picture} attacks={attacks} />;
          })}
      </div>
    </>
  );
};

export default Characters;
