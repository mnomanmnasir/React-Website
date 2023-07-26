import React, {useEffect} from 'react'
import img from '../assets/homeImg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Common = (props) => {

    useEffect(() => {
        AOS.init({ duration: 950 });
    }, [])

    return (
        <section id='header' className='d-flex align-item-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1 data-aos="fade-right" data-aos-delay="300">
                                    {props.name}
                                    <strong className='brand-name'> Noman Nasir</strong>

                                </h1>
                                <h2 className='my-3' data-aos="fade-right" data-aos-delay="300">
                                    We are the team of talented developer making websites


                                </h2>
                                <div className='mt-3' data-aos="fade-right" data-aos-delay="300">
                                    <a href={props.visit} className='btn-get-started'>{props.btname}</a>
                                </div>

                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img' >
                                <img src={props.imgsrc} className='img-fluid animated' alt='' />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Common;