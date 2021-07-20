import React, { Component } from 'react'

export default class LifecycleClass extends Component {
    
   
    constructor(props){
       super();
        this.state={
            data:"Bibek",
            counter:0,
            iter:1,
            show:true,
        }
    }

    componentDidUpdate(preProps,preStaate){
        // this.setState={
        //     data:"Riya"
        // }
        console.log("Heheh,I'm here.",preStaate);
        if(preStaate.counter===this.state.counter){
            alert("Duplicate values");
        }

    }

    shouldComponentUpdate(){
        console.log("should?");
        if(this.state.iter<=15){
            return true;
        }
    }
    componentWillUnmount(){
        // alert("Component will Unmount");
    }
    render() {
       
        return (
          <div>
            <h1>Lifecycle-Class Component</h1>
            <h4>
              {this.state.data} and Counter now:{this.state.counter}
            </h4>
            <button
              className="btn waves-effect waves-light  blue-grey darken-1"
              onClick={() => {
                this.setState({
                  data: this.props.name,
                  counter: this.state.counter + 1,
                  iter: this.state.iter + 1,
                });
              }}
            >
              Update
            </button>
            <h1>
              {this.state.show
                ? "Child cpmponent shown"
                : "Child component removed"}
            </h1>
            <button
              className="btn waves-effect waves-light  blue-grey darken-1"
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              Toggle
            </button>
          </div>
        );
    }
}
