import React, { useEffect } from 'react'
import AnimatedFour from '../../Common/Buttons/AnimatedFour'
import CompanyLogo from '../../Common/CompanyLogo/CompanyLogo'
import AOS from 'aos';
import 'aos/dist/aos.css';

function O4Container() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <div className="container-fluid mb-4 mx-0 px-0 mb-5 pb-5">
        <div className="row px-0 mx-0 mt-5 d-none d-xl-flex justify-content-center align-items-center " >
          <div className="col-md-5 d-flex  justify-content-center align-items-center    flex-column">
            <div className=' text-center mt-5 pt-3'>
              <h3 className='  fw-bold '>
                Actually, You don’t have to be an expert.        </h3>
              <div className='txt-20'>
                <p className='w-family '>Welcome to a world where your landing page never sleeps. Our sales bot is tirelessly dedicated, engaging visitors any hour of the day.</p>
              </div>
            </div>
            <div className=" py-0 px-0 mx-0 mb-5 w-100 px-5  pt-4 mt-5">
              <div className="row px-0 px-xxl-4  mx-0  pt-5 ">
                {/* <img width="90%" height="80% " src="./assets/icons/container4.svg" alt="" /> */}
                <div className="dnt-have-expert  ">
                  <div className='expertOqteq  p-2 radius-15 bkg-light-card' >
                    <CompanyLogo />
                  </div>
                  <div className='expertMan1'>
                    <div className=' bar-icon-div1' data-aos="fade-down"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000">
                      <div className='barExpert1  '>
                        <div className='expert-icon-1-animate'>
                          <div className='position-absolute iconExpert1 banner '><span className='text-light px-2'>Designer</span><img src="./assets/icons/iconExpert1.svg" alt="" />
                          </div>
                          <img src="./assets/icons/barExpert1.svg" alt="" />
                        </div>
                      </div>
                      <img src="./assets/icons/arrowExpert1.svg" alt="" />
                    </div>
                    <img className='' width="90px" src="./assets/icons/expertMan1.svg" alt="" data-aos="fade-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000" />
                  </div>
                  <div className='expertMan2'>
                    <div className=' bar-icon-div2' data-aos="fade-down"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000">
                      <div className='barExpert2'>
                        <div className='expert-icon-2-animate'>
                          <div className='position-absolute iconExpert2'><img src="./assets/icons/iconExpert2.svg" alt="" /><span className='text-light px-2'>AI Expert</span></div><img src="./assets/icons/barExpert2.svg" alt="" /></div>
                      </div>
                      <img src="./assets/icons/arrowExpert2.svg" alt="" />
                    </div>
                    <img width="90px" src="./assets/icons/expertMan2.svg" alt="" data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000" />
                  </div>
                  <div className='expertMan3  '>
                    <div className=' bar-icon-div3' data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000">
                      <div className='barExpert3' >
                        <div className='expert-icon-3-animate'>
                          <div className='position-absolute iconExpert3'><img src="./assets/icons/iconExpert3.svg" alt="" /><span className='text-light px-2'>Ads Specialist</span></div><img src="./assets/icons/barExpert3.svg" alt="" />
                        </div>
                      </div>
                      <img src="./assets/icons/arrowExpert3.svg" alt="" />
                    </div>
                    <img width="90px" src="./assets/icons/expertMan3.svg" alt="" data-aos="fade-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" />
                  </div>
                  <div className='expertMan4 '>
                    <div className=' bar-icon-div4' data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000">
                      <div className='barExpert4'>
                        <div className='expert-icon-4-animate'>
                          <div className='position-absolute iconExpert4'><img src="./assets/icons/iconExpert4.svg" alt="" /><span className='text-dark ps-1 txt-12'>Social Media Manager</span></div><img src="./assets/icons/barExpert4.svg" alt="" />
                        </div>
                      </div>
                      <img src="./assets/icons/arrowExpert4.svg" alt="" />
                    </div>
                    <img width="90px" src="./assets/icons/expertMan4.svg" alt="" data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000" />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <AnimatedFour />
            </div>
          </div>
        </div>
        <div className="row px-0 mx-0 d-flex d-xl-none justify-content-center align-items-center " >
          <div className="col-md-5 d-flex  justify-content-center align-items-center    flex-column">
            <div className='  mt-5   px-2'>
              <h3 className='  fw-bold txt-28'>
                Actually, You don’t have to be an expert.        </h3>
              <div className='txt-20'>
                <p className='w-family '>Welcome to a world where your landing page never sleeps. Our sales bot is tirelessly dedicated, engaging visitors any hour of the day.</p>
              </div>
            </div>
            <div className="container-fluid py-0 px-0 mx-0 mb-5 w-100   ">
              <div className="row px-0 px-xxl-4  mx-0  pt-3  w-100">
                <img width="100%" src="./assets/icons/container4.svg" alt="" />
              </div>
            </div>
            <div className='mt-0 mt-xl-5 d-flex justify-content-start  w-100 px-2'>
              <AnimatedFour />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default O4Container