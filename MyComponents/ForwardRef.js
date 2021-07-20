import React,{forwardRef} from 'react'

 function ForwardRef(props,myRef) {
    return (
        <div>
            <h1>
                <blockquote className="container">Forward ref in react</blockquote>
            </h1>
            <input type="text" name="" id="" ref={myRef}/>
        </div>
    )
}
export default forwardRef(ForwardRef);