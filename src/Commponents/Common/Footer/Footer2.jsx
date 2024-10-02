import React, { useEffect } from 'react'
import CompanyLogoLight from '../CompanyLogoLight/CompanyLogoLight'
import AOS from 'aos';
import 'aos/dist/aos.css';   
import AnimatedFour from '../Buttons/AnimatedFour';
function Footer2() { 
     useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);
    return (
        <>
            <div className='mb-0 py-2 px-0 ' data-aos="fade-up" 
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                <div className='  container-fluid  '>
                    <div className="row bkg-green p-4 pb-5 text-light">
                        <div className="col-md-12 d-flex justify-content-center py-4">
                            <div className='text-center  '> 
                                <h2 className='fw-bold mt-2 w-75 mx-auto'>
                                Buy today and get one month free of our AI tool Onio.
                                </h2>
                                <div className=''>
                                <div className='d-flex justify-content-center align-items-center  mt-4'>
                               <AnimatedFour/>
                               </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Footer2