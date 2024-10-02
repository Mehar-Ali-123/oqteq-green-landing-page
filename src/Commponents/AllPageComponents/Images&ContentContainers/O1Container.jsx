import React from 'react'
import AnimatedFour from '../../Common/Buttons/AnimatedFour'
function O1Container() {
    return (
        <>
            <div className="container-fluid mb-4 mx-0 px-0 ">
                <div className="row px-0 mx-0 mt-5 d-flex justify-content-center align-items-center gap-5" >
                    <div className="col-md-5 d-flex  justify-content-center align-items-center  ">
                        <div className='ms-3 ms-xl-5 mt-0 pt-0 mt-xl-5 pt-xl-3'>
                            <h3 className='  fw-bold txt-28 '>
                                Crafting a Tailored Marketing Blueprint
                            </h3>
                            <div className='txt-20'>
                                <p className=' w-family'>Dive deep into a meticulously crafted advertising roadmap tailored for success. Every twist and turn is designed with intention & precision.</p>
                                <p className='text-muted mt-3 txt-16  w-family'>We don't just design; we test rigorously. Ensuring that each step of your funnel is optimized, we drive engagement from awareness to conversion.
                                </p>
                                <AnimatedFour />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 py-0 px-0 mx-0">
                        <div className="w-100 px-0 mx-0 mt-0 pt-0 mt-xl-5 pt-xl-2 d-flex justify-content-center">
                            <img width="90%" height="80% " src="./assets/icons/container1.svg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default O1Container