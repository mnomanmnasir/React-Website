import React, { useEffect } from 'react'
import img from '../assets/homeImg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Card = (props) => {

    useEffect(() => {
        AOS.init({ duration: 950 });
    }, [])

    return (
        <>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Card;