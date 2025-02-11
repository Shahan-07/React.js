import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(10);
  const addValue = ()=>{
    setcounter(counter + 1);
  }

  return (
    <>
      <h1>React counter project</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Decrease Value {counter}</button>
      <p>Footer {counter}</p>

    </>
  )
}

export default App
