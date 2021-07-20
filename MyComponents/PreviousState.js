import React,{useState} from 'react'

export default function PreviousState() {
const [number, setNumber] = useState(1);
const [prevNumb, setPrevNumb] = useState("_");

function randNumberGenerator(){
    const randNumber = Math.floor(Math.random() * 500);
    setNumber((prevNum)=>{
      setPrevNumb(prevNum);
        setNumber(randNumber);
    });
}
    return (
        <div>
            <h1>
                <blockquote className="container">Previous State</blockquote>
            </h1>
            <h3>Number:{number} </h3>
            <h3>Previous Number:{prevNumb}</h3>
            <button onClick={randNumberGenerator}>Update number</button>
            

        </div>
    )
}
