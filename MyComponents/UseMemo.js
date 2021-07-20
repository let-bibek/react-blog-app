import React,{useMemo,useState} from 'react'

export default function UseMemo() {
const [number, setNumber] = useState(1);
const [secondNumber, setSecondNumber] = useState(1);
   let numberUpdator= useMemo(function updateCounter(){
        console.log("Updated");
        return(number*secondNumber);

    }, [number,secondNumber]);
    return (
        <div>
             <h1>
                    <blockquote className="container">Use Memo Hook</blockquote>
            </h1>
            <h3>First Number:{number}</h3>
            <h3>Second Number:{secondNumber}</h3>
            <h3>Number Multiplication:{numberUpdator}</h3>
            <button className="btn waves-effect waves-light  blue-grey darken-1" onClick={()=>{setNumber(number+1)}}>Update First Num</button>
            <br /><br />
            <button className="btn waves-effect waves-light  blue-grey darken-1" onClick={() => { setSecondNumber(secondNumber+1) }}>Update Second Num</button>

        </div>
    )
}
