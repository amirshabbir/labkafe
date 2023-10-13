import React, { useState } from 'react'

function Hero(){

const state = useState();
// console.log(state);

var [Count, setCount] = useState(0);

    const IncNum = ()=>{
        setCount(Count + 10)
        // setCount(Count++)
        console.log(state);
    }

   return(
   <>
    <div className='hooks'>
      <h1>{Count}</h1>
      <button onClick={IncNum}>Increased 10 Number per Click</button>
    </div>
    </>
   ) 
}

export default Hero;