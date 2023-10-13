import React, { useState } from "react";


function Gettime(){

let CurTime = new Date().toLocaleTimeString();

const [ctime, settime] = useState(CurTime);

const ShowTime =()=>{
    CurTime = new Date().toLocaleTimeString();
    settime(CurTime)
}

    return(

        <>
        <div className="GetTime">
            <span>{ctime}</span>
            <button onClick={ShowTime}>Get Time</button>
        </div>
        </>
    )
};

export default Gettime;