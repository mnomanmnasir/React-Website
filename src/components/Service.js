import React from 'react'
// import img1 from '../assets/serviceImg1.jpg'
import Card from '../containers/Card'
import Data from '../containers/Data'

const Service =() => {
    
        return (
            <div className='my-5'>

                <h1 className='text-center'>
                    Our Services
                </h1>

                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>

                            <div className='row gy-4'>
                    {
                        Data.map((v,i)=>{
                            return <Card key={i}
                            imgsrc={v.imgsrc}
                            title={v.title}
                            />
                        })
                        
                        }

                        </div>
                    </div>
                </div>
                </div>


            </div>
        )
    }


export default Service;