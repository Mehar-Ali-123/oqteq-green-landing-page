import React, { useState, useEffect } from 'react';

const text = [<p className='py-2 my-0'> <img className='imgSteric' src="./assets/icons/asterik.svg" alt="" /> Hurry Up! This promotional offer will not last forever</p>,
<p className='py-2 my-0'> <img className='imgSteric' src="./assets/icons/asterik.svg" alt="" /> Hurry Up! This promotional offer will not last forever</p>];


function HurryUpBar() {
  const [scrollText, setScrollText] = useState([]);

  useEffect(() => {
    const infiniteText = [...text, ...text];
    setScrollText(infiniteText);

    const intervalId = setInterval(() => {
      setScrollText((prevText) => [...prevText.slice(1), prevText[0]]);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="marquee-container py-4 w-100">
      {scrollText.map((text, index) => (
        <h1 className='h1 txt-sharp-red fw-bold p-family ' key={index}>{text}</h1>
      ))}
    </div>
  );
}

export default HurryUpBar;
