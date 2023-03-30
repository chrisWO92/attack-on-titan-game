import React from 'react'
import './attacks.css'

const Attacks = ({charShowing, charAtacks}) => {
  return (
    <div className={charShowing ? "displayNone" : ""}>
      <h2>Select Your Attacks</h2>
      <div id="attacks">
          {charAtacks &&
            charAtacks.map((attack) => {
              return (
                <h2>{attack}</h2>
              );
            })}
        </div>
    </div>
  )
}

export default Attacks
