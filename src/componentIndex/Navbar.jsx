// import React from 'react'
import React, { useState, useEffect } from 'react';
import Gettime from './Gettime';

function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const date = time.toLocaleDateString();
  const currentTime = time.toLocaleTimeString();

  return (
    <>
    <div className='centerA'>
      <h1>Shabbir Garments</h1>
      <p>Todays date is: {date} <span>Todays Time is: {currentTime}</span></p>
      {/* <p>Todays Time is: {currentTime}</p> */}
      <Gettime/>
    </div>

    </>
  );
}

export default Navbar;
