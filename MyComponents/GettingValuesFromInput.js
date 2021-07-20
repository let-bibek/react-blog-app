import React,{useState} from 'react'
export default function GettingValuesFromInput() {
    const [data, setData] = useState("");
    function yourInput(e){
        setData(e.target.value);
    }
    return (
        <div>
            <h4>Get Input Box Values:</h4>
            <div className="datahere"><h4>Your data:</h4> {data}</div>
            <input type="text" name="description" onChange={yourInput} id="description" placeholder="Enter something..." autoFocus={false}/>
        </div>
    )
}
