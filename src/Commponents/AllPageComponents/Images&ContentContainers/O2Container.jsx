import React from 'react'
 import AnimatedFour from '../../Common/Buttons/AnimatedFour'

function O2Container() {
    return (
        <>
            <div className="container-fluid mb-4 mx-0 px-0  ">
                <div className="row px-0 mx-0 mt-5 d-flex justify-content-center align-items-center gap-5" >
               
                    <div className="col-md-5 py-0 px-0 mx-0  mt-4 mt-xl-0">
                        <div className="w-100 px-0 mx-0 mt-2 pt-0 mt-xl-5 pt-xl-2 d-flex justify-content-center">
                            <img width="90%" height="80% " src="./assets/icons/container2.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 d-flex  justify-content-center align-items-center  ">
                        <div className='ms-3 ms-xl-5 mt-0 pt-0  mt-xl-5 pt-xl-3'>
                            <h3 className='  fw-bold txt-28'>
                            From Landing to Thanks: A Seamless Lead Journey                        </h3>
                            <div className='txt-20 w-family'>
                            <p className=' '>Step into a realm where every landing page element is meticulously curated to captivate and convert. Each pixel serves a purpose</p>
                                <p className='text-muted mt-3 txt-16'>Beyond aesthetics, we engineer for results. Every design choice is driven by data and a deep understanding of user behavior, ensuring optimal conversions.
</p>
                                <AnimatedFour/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default O2Container