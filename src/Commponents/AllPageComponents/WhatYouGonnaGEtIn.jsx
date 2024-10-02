// import React from 'react';
// import { WhatYouGetitemsData } from '../../utils/data'; 
// import AnimatedOne from '../Common/Buttons/AnimatedOne';
// function WhatYouGonnaGEtIn() { 

//   return (
//     <>
//       <div className="container-fluid bkg-light-green mt-5 pt-5 p-5 d-flex justify-content-center flex-column align-items-center">
//         <AnimatedOne/>
//         <h2 className='text-center fw-bold mt-3'>Here is what you are gonna get in <span className='txt-green fs-50px'>$499</span></h2>
//         <div className="row px-0 mx-0 mt-4">
//           {WhatYouGetitemsData.map((item, index) => (
//             <div key={index} className="col-md-4 p-4 mx-0 mt-3">
//               <div>
//                 <img src={item.imgSrc} alt="" />
//                 <h3 className="mt-2 fw-bold">{item.title}</h3>
//                 <p className="text-muted">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <p className='text-center txt-sharp-red txt-24 fw-bold  mt-4'>Total Retail Price = $4000+</p>
//       </div>
//     </>
//   );
// }

// export default WhatYouGonnaGEtIn;

import React from 'react';
import { WhatYouGetitemsData } from '../../utils/data';
import AnimatedOne from '../Common/Buttons/AnimatedOne';

function WhatYouGonnaGEtIn() {
  return (
    <>
      <div className="container-fluid glass-container glass-card  mb-0 mt-5 pt-5 p-4 p-md-5 d-none d-xl-flex justify-content-center flex-column align-items-center">
        <div className="cloudy-green-background"></div>
        <AnimatedOne />
        <h2 className="text-center fw-bold mt-3 p-family">
          Here is what you are gonna get in{' '}
          <span className="txt-green fs-50px">$499</span>
        </h2>
        <div className="row px-0 mx-0 mt-4">
          {WhatYouGetitemsData.map((item, index) => (
            <div key={index} className="col-md-4 p-0 p-md-4 mx-0 mt-3   d-flex justify-content-between align-items-start flex-column">
              <div className=''>
                <img src={item.imgSrc} alt="" />
                <h4 className="mt-2 fw-bold pb-1">{item.title}</h4>
              </div>
              <div className='d-flex flex-column gap-1'>
                <p className="text-muted  w-family  my-0">{item.description}</p>
                <span className='fw-bold txt-gray '>{item.retailPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center txt-sharp-red txt-24 fw-bold mt-4 p-family">
          Total Retail Price = $4000+
        </p>
      </div>

      <div className="container-fluid glass-container glass-card  mb-0 mt-0 pt-4  mt-xl-5 pt-xl-5 p-4 p-md-5 d-flex d-xl-none justify-content-center flex-column align-items-center">
        <div className="cloudy-green-background"></div>
        <AnimatedOne />
        <h2 className="text-center fw-bold mt-3 p-family txt-20">
          Here is what you are gonna get in{' '}
          <span className="txt-green txt-20">$499</span> 
        </h2>
        <div className="row px-0 mx-0 mt-4">
          {WhatYouGetitemsData.map((item, index) => (
            <div key={index} className="col-md-4 p-0 p-md-4 mx-0 mt-3  d-flex justify-content-between align-items-start flex-column">
              <div className=''>
                <img src={item.imgSrc} alt="" />
                <h4 className="mt-2 fw-bold pb-1 txt-18">{item.title}</h4>
              </div>
              <div className='d-flex flex-column gap-1'>
                <p className="text-muted  w-family  my-0 txt-14">{item.description}</p>
                <span className='fw-bold txt-gray '>{item.retailPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center txt-sharp-red txt-18 fw-bold mt-4 p-family">
          Total Retail Price = $4000+
        </p>
      </div> 
    </>
  );
}

export default WhatYouGonnaGEtIn;
 
    