import React,{useState} from 'react'
import useTitleCount from '../MyHooks/useTitleCount';
export default function UseOfCustomHook() {
    const [count, setCount] = useState(0);
    useTitleCount(count);
    return (
        <div>
            <h1><blockquote className="container">Custom Hook</blockquote></h1>
            <h3>Notification count:{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}
