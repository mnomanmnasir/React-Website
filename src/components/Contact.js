import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {


    useEffect(() => {
        AOS.init({ duration: 950 });
    }, [])


    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    };

    const formSubmit = (e) => {
e.preventDefault();
alert(`My Name is ${data.fullname}. My Mobile Number is ${data.phone}. My Email Address is ${data.email} and Here is what I want to say ${data.msg} `)
    }
    return (

        <>
            <div className='my-5' data-aos="fade-right" data-aos-delay="600" >
                <h1 className='text-center'>
                    Contact Us
                </h1>
            </div>
            <div data-aos="fade-right" data-aos-delay="600" className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label" />Full Name
                                <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" name='phone' value={data.phone} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name='email' value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name='msg' value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                    </div>

                </div>


            </div>

        </>
    )
}

export default Contact;