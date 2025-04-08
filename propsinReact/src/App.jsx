import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username="Shahan" btnText = "Visit me" Text = "#Sunny" Text2="Cloudy" Text3="Nature"/>
      <Card username="Shifan khan" Text = "#Sunny"/>
    </>
  )
}

export default App
