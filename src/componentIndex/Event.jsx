import React, { useState } from "react";

function Event() {

    const purple = "#8e44ad"

    const [bg, setbg] = useState(purple);
    var [textchange, settext] = useState('Click me To Change Background Color')

    const Bgchange=()=>{
        console.log("hi")
        let newbg = "#34495e"
        setbg(newbg)
        settext('Double Click To Come Again Same Background 👨👩 ')
    }

    const Bgchanged=()=>{
      let newbg = "#8e44ad"
      setbg(newbg)
      settext('Click me To Change Background Color 👨👩 ')
    }

    return (
        <>
        <div className="Event" style={{backgroundColor: bg}}>
            <button onClick={Bgchange} onDoubleClick={Bgchanged}>{textchange}</button>
        </div>
        </>
    );
}

export default Event;

