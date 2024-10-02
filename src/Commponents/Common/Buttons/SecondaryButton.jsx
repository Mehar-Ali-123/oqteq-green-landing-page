import React from 'react'
import { Link } from 'react-router-dom'

function SecondaryButton({ img , btnSpan }) {
    return (
        <>
            <Link to="">
                <button className='d-flex align-items-center p-2 bkg-blue text-light radius-bar px-3 gap-2 cute-button2'>
                    <span>{btnSpan}</span>
                    {img}
                </button>
            </Link>
        </>
    )
}

export default SecondaryButton