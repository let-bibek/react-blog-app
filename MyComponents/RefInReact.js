import React, { Component,createRef } from 'react'

export default class RefInReact extends Component {
    constructor(){
        super();
        this.myRef=createRef();
    }
     getMyRef(){
        this.myRef.current.style.color="red"
    }
    render() {
        return (
            <div>
                <h1>
                    <blockquote className="container">Ref In React</blockquote>
                </h1>
                <input type="text" ref={this.myRef}/>
                <button className="btn waves-effect waves-light  blue-grey darken-1" onClick={()=>this.getMyRef()}>My Ref Demo</button>
            </div>
        )
    }
}
