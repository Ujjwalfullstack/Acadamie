import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testiomonals/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'


const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <Hblog/>
      <Hprice/>
    </>
  )
}

export default Home
