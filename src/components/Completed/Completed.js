import React from "react";

const Completed = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.userName}, {props.task} task completed</h1>
            {props.children}
        </div>
        
    )
}

export default Completed;