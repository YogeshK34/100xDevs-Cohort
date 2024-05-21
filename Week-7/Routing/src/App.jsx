import React, { useCallback, useContext, useState } from 'react';
// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { CountContext } from './components/Context';

// const Landing = lazy(() => import('./components/Landing'));
// const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  // define state variables
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return <div>
    <Buttons setCount={setCount} />
    <CounRenderer />
  </div>
}

function CounRenderer({ }) {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({ }) {
  const { count, setCount } = useContext(CountContext);

  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase Count</button>


    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease Count</button>
  </div>
}

export default App;