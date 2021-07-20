import React from 'react'

export default function Props(props) {
    return (
        <div>
            
           <h4 id="name">Name: {props.studentName}</h4>

            <h4 id="email">Email: {props.stuEmail}</h4>
            <br /><br /><br /><br />
            

        </div>
    )
}
