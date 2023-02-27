import React from 'react'
import img from '../assets/homeImg.png'
import Common from '../containers/Common';


const Home = () => {
  return (
    <Common name='Grow your business with'  visit='/service' btname='Get Started' imgsrc={img} />

  )
}

export default Home;