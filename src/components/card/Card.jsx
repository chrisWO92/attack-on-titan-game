import React from "react";
import "./card.css";

const Card = ({ name, picture, attacks }) => {
  return (
    <>
      <div id="card">
        <h3>{name}</h3>
        <div id="image-container">
            <img src={picture} alt={name} />
        </div>
      </div>
    </>
  );
};

export default Card;
