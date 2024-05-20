import { useCallback, useEffect, useMemo, useState, memo, useRef } from 'react'

// understanding useRef()

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000);
  }, [])

  return (
    <div>
      hi there you're income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

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

export default App