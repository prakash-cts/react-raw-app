import React from 'react'

function ClickEventHandler() {

    function clickHandler(){
        console.log('ButtonClicked')
    }
    return (
        <div>
        <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default ClickEventHandler
