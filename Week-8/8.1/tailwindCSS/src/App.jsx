import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCards'

function App() {


  return (
    <>
      <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount Pending"} amount={"92,15464"} orderCount={13} />
        {/* <RevenueCard title={"Amount Received"} amount={"50,000"} orderCount={7} /> */}
        {/* <RevenueCard title={"Amount Due"} amount={"30,000"} orderCount={5} /> */}
      </div>

    </>
  )
}

export default App