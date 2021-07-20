import React, { Component } from 'react'
import { CommonContext } from './CommonContext'
export default class MainContextChild extends Component {
    render() {
        return (
            <div>
                <CommonContext.Consumer>
                    {
                        ({color})=>(
                            <h3 style={{backgroundColor:color}}>This Is Main Context Child Page.</h3>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}
