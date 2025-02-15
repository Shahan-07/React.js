import { useState } from 'react'
import Props from '../components/props'


function App() {

  return (
    <>
      <div>
        <h1 className='bg-yellow-400'>Hello</h1>
      </div>

      <Props username="best flowers" Text="#Sunny" Text2="#cloudy" Text3="nature" />
      <Props username="Nature"/>
      <Props username="Best Life"/>
    </>
  )
}

export default App
