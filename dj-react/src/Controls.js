import React from 'react';

const Controls = ({handleSmallTime, handlePartyDj}) => {
  return (
    <div>
      <button onClick = {handleSmallTime}>Small Time</button>
      <button onClick = {handlePartyDj}>Party</button>
    </div>
  )
}

export default Controls;
