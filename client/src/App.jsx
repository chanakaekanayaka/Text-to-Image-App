import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-29 min-h-screen bg-gradient-to-b from-teal-50 to-orange '>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/result' element={<Result></Result>}/>
        <Route path='/buy' element={<BuyCredit></BuyCredit>}/>
      </Routes>

      </div>
  )
}

export default App
