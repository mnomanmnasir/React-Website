import React, {useEffect} from 'react'
import img from '../assets/homeImg.png'
import Common from '../containers/Common';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Common data-aos="zoom-in-right" data-aos-delay="600" name='Grow your business with'  visit='/service' btname='Get Started' imgsrc={img} />

  )
}

export default Home;