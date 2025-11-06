import React, { useState } from 'react'

const State = () => {
  const [time, setTime] = useState(0);
  const incrementTime = () => {
    setTime(time + 345);


  }
    return (
    <div>
      <h2> time: {time}</h2>
      <button onClick={incrementTime}>Increment</button>
    </div>
  )
}

export default State
