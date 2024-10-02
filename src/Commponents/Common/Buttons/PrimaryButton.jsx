import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PrimaryButton({ img, btnSpan, bkgGreen,textColor}) {
    return (
        <>
            <Link to="">
                <button className={`d-flex align-items-center p-2 ${bkgGreen || "bkg-blue"} txt-18 ${textColor || "text-light"}  radius-bar px-3 gap-2 cute-button`}>
                    { img  || <img height='30px' width='20px' src="./assets/icons/desktop.svg" alt="" />}
                    {btnSpan ||  <span>Book a Demo</span>}
                </button>
            </Link>
        </>
    )
}

export default PrimaryButton