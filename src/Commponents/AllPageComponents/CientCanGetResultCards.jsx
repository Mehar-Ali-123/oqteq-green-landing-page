import React from 'react';
import { ClientCardsData } from '../../utils/data';
import AnimatedFour from '../Common/Buttons/AnimatedFour'; 

function CientCanGetResultCards() {
  return (
    <>
      <div className="container-fluid mt-0  pt-0 mt-xl-5  pt-xl-5 py-5  ">
        <h1 className="text-start text-xl-center pt-5 fs-50px px-3">Our Clients <span className="fw-bold ">get results</span></h1>
        <div className="row d-flex justify-content-center gap-4 mt-0 mt-xl-5">
          {ClientCardsData.map((card, index) => (
            <div key={index} className={`col-md-8 radius-26 mt-1 mt-xl-3 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="row radius-26 d-flex justify-content-center px-2 p-3">
                <div className={`col-md-5 mb-3 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                  <img width="100%" height="100%" src={card.imageSrc} alt="" />  
                </div>
                <div className={`col-md-7 ps-3 ps-md-5 d-flex justify-content-center align-items-center ${index % 2 === 0 ? '' : 'order-md-1'}`}>
                  <div className="row">
                    <p className='txt-green w-family fw-semibold txt-38'>"The Game-Changer"</p>
                    <div className="col-6 col-md-4 d-flex justify-content-center align-items-center  border-right ">
                    <div className=' my-3 text-center'>
                      <h2 className='fw-bold w-family txt-36'>{card.increasePercent}</h2>
                      <p className="txt-18 text-muted w-family">{card.metric}</p>
                    </div>
                    </div>
                    <div className="col-6 col-md-4 d-flex justify-content-center align-items-center ">
                     <div className=' my-3 text-center'>
                     <h2 className='fw-bold w-family txt-36'>{card.increasePercent2}</h2>
                      <p className="txt-18  text-muted w-family">{card.metric1}</p>
                     </div>
                    </div>
                    <div className="col-md-12">
                      <p className=" w-family txt-16- mt-2 mt-xl-0">{card.testimonial}</p>
                      <AnimatedFour />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CientCanGetResultCards;
