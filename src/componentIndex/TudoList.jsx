import React, { useState } from "react";
import TodoListhtml from "./TodoListhtml";



function TudoList(){

    const[inpuList, setinputList] = useState(" buy a Apple");
    const [items, setItems] = useState([]);

    const itemEvent = (prop) =>{
        setinputList(prop.target.value)
    }

    const listOfItems =()=>{
      setItems((oldItems) =>{
        return[...oldItems, inpuList]
     })
     setinputList("")
    };
    

    const deleteItems =(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        })
    }

    return(
        <>
<div className="main_div">
    <div className="center">
        <br />
        <h1>ToDu List</h1>
        <br />
        <input type="text" placeholder="Add A Items" onChange={itemEvent} value={inpuList} />

        <button onClick={listOfItems}> + </button>

        <ol>
            {/* <li> {inpuList} </li> */}

           { items.map((itemval, index)=>{
           return  <TodoListhtml key={index} id={index} text={itemval} onSelect={deleteItems}/>
           })}


        </ol>

    </div>
</div>

        </>
    )
};

export default TudoList;