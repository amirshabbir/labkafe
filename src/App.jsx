import React from "react";
import Navbar from "./componentIndex/Navbar";
import Hero from "./componentIndex/Hero";
import Banner from "./componentIndex/Banner";
import Event from "./componentIndex/Event";
import Form from "./componentIndex/Form";
import Form2 from "./componentIndex/Form2";
import TudoList from "./componentIndex/TudoList";

function App (){

    return(
        <>
        <Navbar/>    
        <Hero/>  
        <Banner/>  
        <Event/>
        <Form/>
        <Form2/>
        <TudoList/>
        </>
    )
 
}
export default App;
