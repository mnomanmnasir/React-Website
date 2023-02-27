import React from 'react'
import img from '../assets/aboutImg.avif'
import Common from '../containers/Common'

const About = () => {
    return (
        <Common name='Welcome to About page' imgsrc={img} visit='/contact' btname='Contact Now' />
    )
}

export default About;