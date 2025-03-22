import { useState } from 'react'
import './App.css'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/Todo'

function App() {

  return (
    <>
      <h1>Learn about ReduxToolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
