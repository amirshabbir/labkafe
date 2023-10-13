import React from "react";

function TodoListhtml(props){

    

    return(
        <>
        <div className="content">
          <i className="fa-solid fa-xmark" onClick={()=>{
            props.onSelect(props.id )
          }}/>
          <li> {props.text} </li>
        </div>
        </>
    )
};

export default TodoListhtml;