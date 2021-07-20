import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
            n:1,
        }
    }
    render() {
        console.log("Re-rendering");
        return (
            <div>
                <h1>
                    <blockquote className="container">Pure Component</blockquote>
                </h1>
                <h3>N:{this.state.n}</h3>
                 <button
          className="btn waves-effect waves-light  blue-grey darken-1"
          onClick={() => {
           this.setState({n:this.state.n+1});
          }}
        >Pure Component</button>
            </div>
        )
    }
}
