import React,{useRef} from 'react'

export default function UncontrolledComponent() {
    const textRef = useRef();
    const emailRef = useRef();
    function refHandler(){
        // textRef.current.style.color="red"
        // emailRef.current.style.color="green"
        
        if (textRef.current.value.length < 3) {
            textRef.current.style.borderBottom = "2px solid red";

        }
        else if (textRef.current.value.length < 7){
            textRef.current.style.borderBottomColor = "yellow";

        }
        else{
            textRef.current.style.borderBottomColor = "green";
        }
        
    }
   function submitFunc(e){
    e.preventDefault();
   }
    return (
        <div>
            <h1>
                 <blockquote className="container">Uncontrolled Component</blockquote>
             </h1>
            <form onSubmit={submitFunc}>
                <input type="text" placeholder="Name" onChange={refHandler} ref={textRef}/>
                <br />
                
                   
                        <input id="f2_email" type="email" className="validate" placeholder="Email" ref={emailRef}/>
                        <label htmlFor="f2_email">Email</label>
                    
               
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
