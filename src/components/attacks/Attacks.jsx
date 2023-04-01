import React, { useEffect, useRef, useState } from 'react'
import './attacks.css'

const selectionArray = [];

const Attacks = ({charShowing, charAttacks, character}) => {

    const [attackSelected0, setAttackSelected0] = useState(false);
    const [attackSelected1, setAttackSelected1] = useState(false);
    const [attackSelected2, setAttackSelected2] = useState(false);
    const [attackSelected3, setAttackSelected3] = useState(false);
    const [attackSelected4, setAttackSelected4] = useState(false);

    const arrayAttackSelected = [attackSelected0, attackSelected1, attackSelected2, attackSelected3, attackSelected4];
    const arraySetAttackSelected = [setAttackSelected0, setAttackSelected1, setAttackSelected2, setAttackSelected3, setAttackSelected4];

    

    const clickHandler = (id, name, power) => {
        arraySetAttackSelected[id](!arrayAttackSelected[id])
        selectionArray.push({name, power})
        console.log(selectionArray)
    }

  return (
    <div className={charShowing ? "displayNone" : ""}>
      <h3>Character: {character}</h3>
      <h4>Select the order of your attacks:</h4>
      <ul id="attacks">
          {charAttacks &&
            charAttacks.map(({id, name, power}) => {
              return (
                <li key={id} onClick={() => clickHandler(id, name, power)} className={arrayAttackSelected[id] ? `blue` : ''}>{name}: {power}</li>
              );
            })}
        </ul>
    </div>
  )
}

export default Attacks
