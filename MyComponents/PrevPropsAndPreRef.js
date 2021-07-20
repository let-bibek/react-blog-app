import React,{useState} from 'react'
import PrevPropsAndPreRefChild from './PrevPropsAndPreRefChld';
export default function PrevPropsAndPreRef() {
    const [counter, setCounter] = useState(1);
    function generatorFunc(){
        setCounter(Math.floor(Math.random() * 100));
        console.log(counter);
    }
    return (
        <div>
            <PrevPropsAndPreRefChild counter={counter}/>
            <button onClick={generatorFunc}>Generate Random Number</button>
        </div>
    )
}
