import React from 'react'

import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Qualities from '../components/Qualities'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      {/* <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/> */}
      <Footer/>
    </>
  )
}

export default Home