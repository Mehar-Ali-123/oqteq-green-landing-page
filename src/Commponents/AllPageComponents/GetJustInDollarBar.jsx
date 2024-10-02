import React, { useEffect, useRef } from 'react';

const images = [
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
];

function GetJustInDollarBar() {
    return (
      <>
      <logo-slider> 
      <div>
      {images.map((image, index) => (
              <img
              width="380px"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="marquee-image"
              />
            ))}
       </div> 
      <div>
      {images.map((image, index) => (
              <img
              width="380px"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="marquee-image"
              />
            ))}
      </div> 
    </logo-slider> 
        </>
      );
    }
     
export default GetJustInDollarBar