import React,{useEffect} from "react";

export default function LifecycleFunctional(props){
    let  newData=props.data;
    console.log(newData)
    // const[counter,setCounter]=useState(0);
    // const [data, setData] = useState(100)
    useEffect(()=>{
        
        console.log("UseEffect Called counter")
    },[props.counter]);

    useEffect(()=>{
        console.log("UseEffect Called newData")
    },[newData]);
    return (
      <div>
        <h3>LifecycleFunctional </h3>
        {/* <h3>Counter: {counter}</h3> */}
        {/* <h3>Data: {data}</h3> */}

        {/* <button onClick={()=>setCounter(counter+1)}>Update counter</button>
            <button onClick={() => setData(data + 1)}>Update data</button> */}

        <h3>Data: {newData}</h3>

        <button
          className="btn waves-effect waves-light  blue-grey darken-1"
          onClick={() => (newData = newData + 55)}
        >
          Update Data
        </button>
      </div>
    );
}