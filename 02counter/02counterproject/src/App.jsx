import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(10);

  const addValue = ()=>{
    if(counter < 15){
    setcounter(counter + 1);
  }
}

  const removeValue = ()=>{
    if(counter > 5){
    setcounter(counter -1);
  }
}

  return (
    <>
      <h1>React counter project</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value </button>
      <p>Footer {counter}</p>
    </>
  )
}

export default App
