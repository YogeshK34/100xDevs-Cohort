import React from 'react'
import './App.css'


// create a counter app with increments & decrement buttons whic add & subtracts value with context API 
function App() {

  return (
    <>
      <Count />
    </>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Button />
  </div>
}


function CountRenderer() {
  const count = useRecoilVa;
  // console.log("child- rerendering!")

  return <div>
    {count}
  </div>
}

function Button() {
  const { count, setCount } = 0;
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increment</button>

    <button onClick={() => {
      setCount(count - 1);
    }}>Decrement</button>
  </div>
}



export default App