import React from 'react'
import AnimatedFour from '../../Common/Buttons/AnimatedFour'

function O3Container() {
  return (
    <>
      <div className="container-fluid mb-4 mx-0 px-0  ">
        <div className="row px-0 mx-0 mt-5 d-flex justify-content-center align-items-center gap-5 " >
          <div className="col-md-5 d-flex  justify-content-center align-items-center gap-5 ">
            <div className='ms-3 ms-xl-5 mt-4 pt-0 mt-xl-5 pt-xl-3'>
              <h3 className='  fw-bold txt-28'>
                24/7 Custom AI Sales Bot: Tailored for Your Business           </h3>
              <div className='txt-20 w-family'>
                <p className=' '>Welcome to a world where your landing page never sleeps. Our sales bot is tirelessly dedicated, engaging visitors any hour of the day.</p>
                <p className='text-muted mt-3 txt-16'>With automation and intelligence, the bot transforms casual visitors into customers, making sales while you rest. Your landing page becomes a relentless sales machine
                </p>
                <AnimatedFour />
              </div>
            </div>
          </div>
          <div className="col-md-5 py-0 px-0 mx-0  ">
            <div className="w-100 px-0 mx-0 mt-0 pt-0  mt-xl-5 pt-xl-2    d-flex justify-content-center  ">
              <img className=' ' width="90%" height="80% " src="./assets/icons/container3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default O3Container