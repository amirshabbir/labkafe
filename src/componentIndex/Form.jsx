import React, { useState } from "react";

function Form() {

    const [name, setname] = useState()
    const [Fullname, setFullname] = useState()

    const textwrite =(event)=>{
        // console.log(event.target.value)
        setname(event.target.value);
    }
    const onSubmit =()=>{
        setFullname(name)
    }

    return(
        <>
        <div className='BannerFrom'>

            <h1>Hello {Fullname}</h1>
            <input type="text" placeholder="Enter Your Name" defaultValue={''} onChange={textwrite} value={name} />
            <button onClick={onSubmit}> 👩‍🦰👩‍🦰 Submit 🧑👨</button>

        </div>
         </>
    )

};

export default Form;