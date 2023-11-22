import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props)
        //set the state
        // this is class specific and can be modified
        this.state = {
            count: 0
        }
    }
    increment(){
        //change the state
        this.setState({
            count: this.state.count+1
        },
        ()=>{
            console.log('Callback Value',this.state.count)
        }
        )
        console.log('Previous Value',this.state.count)
    }
    increment1time(){
        this.setState((prevState) => ({
            count: prevState.count+1
        }))
    }
    increment5times() {
        this.increment1time();
        this.increment1time();
        this.increment1time();
        this.increment1time();
        this.increment1time();
    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=> this.increment5times()}>Increment</button>
            </div>
        )
    }
}

export default Counter;