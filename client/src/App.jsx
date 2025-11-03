import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#030712] text-gray-100'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/result' element={<Result></Result>}/>
        <Route path='/buy' element={<BuyCredit></BuyCredit>}/>
      </Routes>
      <Footer></Footer>

      </div>
  )
}

export default App
