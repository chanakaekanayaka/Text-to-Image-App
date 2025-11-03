import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Feedback from '../components/Feedback'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>

      <Header></Header>
      <Steps></Steps>
      <Description></Description>
      <Feedback></Feedback>
      <GenerateBtn></GenerateBtn>
      <Footer></Footer>
     
    </div>
  )
}

export default Home
