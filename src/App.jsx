import React from 'react'
import Navbar from './assets/Componets/Navbar'
import Egnine from './assets/Componets/Egnine';

function App() {
  return (
    <div className='w-full h-screen bg-white relative flex flex-col items-center justify-start'>
      <Navbar/>

      <Egnine/>
    </div>
  )
}

export default App