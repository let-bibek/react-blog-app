import React, { Component } from 'react'
import { CommonContext } from "./CommonContext";
import MainContextChild from './MainContextChild';
import ContextButton from './ContextButton';
export default class CreateContextMain extends Component {
    constructor(){
        super();
        this.updateColor=(color)=>{
            this.setState({
                color:color,
            })
        }
        this.state={
            color:"skyblue",
            updateColor:this.updateColor,
        }
    }
    render() {
        return (
            <div>
                 <CommonContext.Provider value={this.state}>
              <h3><blockquote className="container">Common Context Example</blockquote></h3>
              <MainContextChild/>
              <ContextButton/>
            </CommonContext.Provider>
            </div>
        )
    }
}
