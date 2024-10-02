import React from 'react'
import AnimatedFour from '../Common/Buttons/AnimatedFour'

function MainTopSolutions() {
  return (
    <>
      <div className='container-fluid px-3  px-4  pb-md-5'>
        <div className="row   pt-3 d-none  d-xl-flex justify-content-center align-items-center px-0 px-md-4 ">
          <div className="col-md-6 pt-5    ">
            <div className='d-flex justify-content-center align-items-start flex-column  ' >
              <h1 className='fs-50px fw-bold pe-3 pe-xxl-5'>
                Marketing Solutions <span className='txt-green'>That Scale.</span>
              </h1>
              <p className='txt-18  pe-xxl-5  me-0 me-xxl-3 txt-22 w-family'>We create end-to-end marketing solutions to help your business succeed and scale</p>
              <AnimatedFour />
            </div>
          </div>
          <div className=" col-12 col-xl-6 ps-5 pe-0"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="row d-flex px-0 mx-0 pt-2 gap-3 pe-5   d-flex justify-content-end">
              <div className='position-relative   circleMainDiv  '>
                <div className="   bkg-dark speakerOqteq  position-absolute hover-green-shadow">
                  <img
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    width='50px'
                    src="./assets/icons/speaker.svg"
                    alt=""
                    style={{
                      animation: 'bounce 3s infinite',
                    }}
                  />
                </div>
                <div className="   bkg-dark notifyOqteq  position-absolute hover-green-shadow">
                  <img
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    width='50px'
                    src="./assets/icons/notification.svg"
                    alt=""
                    style={{
                      animation: 'bounce 3s infinite',
                    }}
                  />
                </div>
                <div className="   bkg-dark msgOqteq position-absolute hover-green-shadow">
                  <img
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    width='50px'
                    src="./assets/icons/message.svg"
                    alt=""
                    style={{
                      animation: 'bounce 3s infinite',
                    }}
                  />
                </div>

                <div className='oqteq-main-circle    w-75' >
                  <img
                    data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    width="400px"
                    src="./assets/icons/oqteqMainCircle.svg"
                    alt=""
                    style={{
                      animation: 'floatUpDown 3s infinite, cuteLady 2s infinite alternate',
                    }}
                  />
                </div>
                <div className="smileOqteq d-flex justify-content-center  position-absolute">
                  <div className='box-shadow p-2 radius-10'>
                    <img
                      data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                      src="./assets/icons/smileIcon.svg"
                      alt=""
                      style={{
                        animation: 'bounce 3s infinite',
                      }}
                    />
                  </div>
                </div>
                <div className="socialMediaOqteq position-absolute">
                  <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
                    <div className='box-shadow p-2 radius-10'>
                      <img
                        data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        src="./assets/icons/facebook.svg"
                        alt=""
                        style={{
                          animation: 'bounce 3s infinite',
                        }}
                      />
                    </div>
                    <div className='box-shadow p-2 radius-10'>
                      <img
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        src="./assets/icons/insta.svg"
                        alt=""
                        style={{
                          animation: 'bounce 3s infinite',
                        }}
                      />
                    </div>
                    <div className='box-shadow p-2 radius-10'>
                      <img
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        src="./assets/icons/snap.svg"
                        alt=""
                        style={{
                          animation: 'bounce 3s infinite',
                        }}
                      />
                    </div>
                    <div className='box-shadow p-2 radius-10'>
                      <img
                        data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        src="./assets/icons/linkedIn.svg"
                        alt=""
                        style={{
                          animation: 'bounce 3s infinite',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className=" addFvrtOqteq  d-flex justify-content-center  position-absolute">
                  <div className='box-shadow p-2 radius-10'>
                    <img
                      data-aos="fade-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                      src="./assets/icons/heartFile.svg"
                      alt=""
                      style={{
                        animation: 'bounce 3s infinite',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row   pt-3 d-flex justify-content-center align-items-center px-0 px-md-4 d-block d-xl-none">
          <div className="col-md-6 pt-0   ">
            <div className='d-flex justify-content-center align-items-start flex-column  ' >
              <h1 className='txt-20 fw-bold pe-3 pe-xxl-5'>
                Marketing Solutions <span className='txt-green'>That Scale.</span>
              </h1>
              <p className='txt-14 pe-xxl-5  me-0 me-xxl-3  w-family'>We create end-to-end marketing solutions to help your business succeed and scale</p>
              <span className=''><AnimatedFour /></span>
            </div>
          </div>
          <div className=" col-12 col-xl-6  ps-0 pe-0">
            <div className="row d-flex px-0 mx-0 pt-2 gap-3 pe-5   d-flex justify-content-end">
              <div className='position-relative '>
                <img width="120%" src="./assets/icons/onioMainImg.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainTopSolutions