import React, {Component} from "react";

class UsingClass extends Component{

    constructor(){
        super()
        //set the state
        // this is class specific and can be modified
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        //change the state
        this.setState({
            message: 'Thanks for subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default UsingClass;