import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import AnimatedFour from '../Buttons/AnimatedFour';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavBar({ btnClr, btnSpan }) {

    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    const [scrolled, setScrolled] = useState(false);

    // Add a scroll event listener to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `navbar navbar-expand-lg   py-3 navbaar  bkg-white px-3 px-md-5`;

    return (
        <>
            <nav className={navbarClasses} >
                <div className="container-fluid px-0 px-md-5 mt-3    ">
                    <Link className="navbar-brand  " href="#" data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                        <CompanyLogo />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent" ata-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="900">
                        <div className="ms-auto mt-4 mt-md-0 ps-1">
                            <div className='d-flex flex-column flex-md-row justify-content-start justify-content-md-center align-items-start align-items-md-center   gap-4 gap-md-5   me-3 me-md-3  '>
                            <img src="./assets/icons/ratedStars.svg" alt="" />
                            <AnimatedFour />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
