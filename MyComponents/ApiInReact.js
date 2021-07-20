import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
export default function ApiInReact() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((resp)=>{
                setData(resp);
            })
        })

    },[])
    return (
        <div className="about-page">
            <h1>
                <blockquote className="container">API in React</blockquote>
            </h1>

            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={"/userapi/"+item.id}>{item.name}</Link></td>
                           
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}
