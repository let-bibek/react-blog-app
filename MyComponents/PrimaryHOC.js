import React,{useState} from 'react'

export default function PrimaryHOC(props) {
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <h3 style={{ backgroundColor: props.myStyleDataBg, color: props.myStyleDataText}}>{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
        </div>
    )
}
