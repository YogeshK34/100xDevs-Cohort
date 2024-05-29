import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>Red</div>
        <div style={{ backgroundColor: "yellow" }}>Yellow</div>
        <div style={{ backgroundColor: "green" }}>Green</div>
      </div>


      <div className='flex '>
      <div style={{ backgroundColor: "red" }}>Red</div>
        <div style={{ backgroundColor: "yellow" }}>Yellow</div>
        <div style={{ backgroundColor: "green" }}>Green</div>
      </div>
    </>
  )
}

export default App