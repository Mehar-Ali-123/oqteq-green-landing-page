import React from 'react'
import CompanyLogo from '../CompanyLogo/CompanyLogo'

function OqteqLinks() {
  return (
    <>
    <div className="container-fluid p-4 mt-0 pt-4 mt-xl-5 pt-xl-5 mb-2 mb-xl-5 pb-5">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-3 ps-1 ps-xl-5">
                <CompanyLogo/> 
            </div>
            <div className="col-md-5 className='txt-green py-0 my-0  "> 
                <div className='d-flex justify-content-start gap-3 mt-3 mt-xl-0 justify-content-xl-evenly align-items-center w-family'>
                    <p className='txt-green py-0 my-0  fw-semibold txt-20'>Privacy</p> 
                    <p className='txt-green py-0 my-0  fw-semibold txt-20'>Terms</p> 
                    <p className='txt-green py-0 my-0  fw-semibold txt-20'>Support</p> 
                    <p className='txt-green py-0 my-0  fw-semibold txt-20'>2023@Oqteq</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OqteqLinks