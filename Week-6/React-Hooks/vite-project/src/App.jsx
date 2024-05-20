import { useState, memo } from "react";

// const ButtonComponent = memo(() => {
//   console.log("Child render");

//   return (
//     <div>
//       <button>Button clicked</button>
//     </div>
//   );
// });

function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <button onClick={() => {
        setCount((count + 1))
      }}> Click me {count}</button>
    </div>
  );
}

export default App;
