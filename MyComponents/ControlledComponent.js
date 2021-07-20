import React,{useState} from 'react'

export default function ControlledComponent() {
    const [data, setData] = useState();
    return (
        <div>
            <h1>
                <blockquote className="container">Controlled Component</blockquote>
            </h1>

            <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
        </div>
    )
}
// import React, { Component } from 'react'

// export default class ControlledComponent extends Component {
//     constructor(){
//         super();
//         this.state={
//             data:"abc",
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.data} onChange={(e)=>{this.setState({data:e.target.value})}} />
//             </div>
//         )
//     }
// }
