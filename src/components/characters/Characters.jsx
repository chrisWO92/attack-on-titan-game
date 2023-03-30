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
    id: "0",
    name: "Attack on Titan",
    picture: IMG1,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "1",
    name: "Female Titan",
    picture: IMG2,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "2",
    name: "Armored Titan",
    picture: IMG3,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "3",
    name: "Colossal Titan",
    picture: IMG4,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "4",
    name: "Beast Titan",
    picture: IMG5,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "5",
    name: "War Hammer Titan",
    picture: IMG6,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "6",
    name: "Jaw Titan",
    picture: IMG7,
    attacks: ["attack1, attack2, attack3"],
  },
  {
    id: "7",
    name: "Cart Titan",
    picture: IMG8,
    attacks: ["attack1, attack2, attack3"],
  },
];

const Characters = ({ character, setCharacter, setSelected, charShowing, charactersHidding }) => {
  return (
    <>
      <div className={charShowing ? "" : "displayNone"}>
        <h2>Select Your Titan</h2>
        <div id="characters">
          {characters &&
            characters.map(({ id, name, picture, attacks }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  picture={picture}
                  attacks={attacks}
                  setCharacter={setCharacter}
                  character={character}
                  setSelected={setSelected}
                />
              );
            })}
        </div>
        <button id='continue' onClick={charactersHidding}>Continue</button>
      </div>
    </>
  );
};

export default Characters;
