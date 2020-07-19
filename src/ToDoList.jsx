import React from 'react'

const ToDoList = (props) => {
    return(
        <>
        <div>
        <p> <button onClick=
        {() => {
            props.selectItem(props.id)
        }} 
        className="delBut"> x </button> 
        {props.myValList} 
        </p>
        </div>
        
        </>
    )
}

export default ToDoList