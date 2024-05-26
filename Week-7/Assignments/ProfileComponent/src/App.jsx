import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
        <button onClick={() => { handleColorChange('blue') }}>Blue</button>
        <button onClick={() => { handleColorChange('purple') }}>Purple</button>
        <button onClick={() => { handleColorChange('pink') }}>Pink</button>
        <button onClick={() => { handleColorChange('yellow') }}>Yellow</button>
        <button onClick={() => { handleColorChange('green') }}>Green</button>
      </div>
    </>
  );
}

export default App;
