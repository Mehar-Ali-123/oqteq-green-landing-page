import React, { useEffect, useRef } from 'react';

const images = [
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
    './assets/icons/getInDollar.svg',  
];

function GetJustInDollarBarTop() {
    return (
      <>
      <logo-slider-top> 
      <div>
      {images.map((image, index) => (
              <img
              width="200px"
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
              width="200px"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="marquee-image"
              />
            ))}
      </div> 
    </logo-slider-top> 
        </>
      );
    }
      
export default GetJustInDollarBarTop