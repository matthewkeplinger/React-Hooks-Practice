import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)


  function decrementCount(){
    setCount (prevCount => prevCount - 1)    
  }

  function incrementCount(){
    setCount (prevCount => prevCount + 1)
  }


  return (
    <>
    <h5>React useState Counter</h5>
    <button onClick = {decrementCount}>-</button>
    <span>{count}</span>
    <button onClick = {incrementCount}>+</button>
    </>
  );
}

export default App;
