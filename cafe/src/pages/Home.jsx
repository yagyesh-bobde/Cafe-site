import React from 'react'

import About from '../components/About'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'


const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      {/* <Team/>
      <Reservation/> */}
      <Footer/>
    </>
  )
}

export default Home