import React, { useState } from "react";

function Banner() {
const state = useState();

const [Count, satNum] = useState(0);

const chanNum =()=>{
    console.log(state);
    satNum (Count+1)
}

return(
    <>
    <div className="hooks-1">
        <h1>{Count}</h1>
        <button onClick={chanNum}>Increased a Number Per Click</button>
    </div>
    </>
)
};

export default Banner;
