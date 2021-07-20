import React, { useRef } from 'react'

export default function UseRef() {
    const myFunctionalRef = useRef(null);
    function myRefFunction() {
        myFunctionalRef.current.style.color = "orangered";
    }
    return (
        <div>
            <h1>
                <blockquote className="container">Use ref in react</blockquote>
            </h1>
            <input type="search" ref={myFunctionalRef} />
            <button  onClick={myRefFunction}>UseRef Demo</button>
        </div>
    )
}
