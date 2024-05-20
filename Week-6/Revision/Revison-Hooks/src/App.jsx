import { useEffect, useRef } from "react";
import { Assignment2 } from "./components/Factorial";

export function Assignment1() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // Focus the input field when the button is clicked
    inputRef.current.focus();
  };

  return (

    <div>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default Assignment1


// useEffect(() => {
//   // Some operation to get the data
//   setExchange1Data({
//     returns: 100
//   });
// }, [])

// useEffect(() => {
//   // Some operation to get the data
//   setExchange2Data({
//     returns: 100
//   });
// }, [])

// useEffect(() => {
//   // Some operation to get the data
//   setTimeout(() => {
//     setBankData({
//       income: 100
//     });
//   }, 5000)
// }, [])

// console.log("hi there")
// with the normal approach
// const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
// console.log("hi there")
// const incomeTax = (cryptoReturns + bankData.income) * 0.3
// using the useMemo() approach

// const cryptoReturns = useMemo(() => {
//   console.log("Hi there before!")
//   return exchange1Data.returns + exchange2Data.returns;
// }, [exchange1Data, exchange2Data])

// const incomeTax = (cryptoReturns + bankData.income) * 0.3

// understanding useCallback()
//   const calculateCrytpoReturns = useCallback(() => {
//     return exchange1Data.returns + exchange2Data.returns;
//   },[exchange1Data,exchange2Data])

//   return (
//     <div>
//       <CryptoGainsCalculator calculateCrytpoReturns = {calculateCrytpoReturns} />
//     </div>
//   )
// }


// // understanding memo()
// const CryptoGainsCalculator = memo(({calculateCrytpoReturns}) =>{
//   return <div>
//     Your crypto returns are {calculateCrytpoReturns()} 
//   </div>
// })

// export default App


// import { useEffect } from "react";

// // Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

// export function Assignment1() {

//     useEffect(() => {

//     }, []);

//     const handleButtonClick = () => {

//     };

//     return (
//         <div>
//             <input type="text" placeholder="Enter text here" />
//             <button onClick={handleButtonClick}>Focus Input</button>
//         </div>
//     );
// };