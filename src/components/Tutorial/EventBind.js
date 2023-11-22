import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        //set the state
        // this is class specific and can be modified
        this.state = {
            message: 'Hello'
        }
    }
    clickHandler(){
        //change the state
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* The below is one method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* The below is another method */}
        <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind
