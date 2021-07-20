import React, { useState, useEffect } from 'react'

export default function TestApi() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userdata, setUserdata] = useState([]);
const [updateOrSubmit, setUpdateOrSubmit] = useState(1);
    const [id, setId] = useState(null);
    
   
    function fetchApi() {
        console.log(name);
        let data = { name, email};
        fetch("http://localhost:3000/userdatabase", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((resu) => {
            resu.json().then((resp) => {
                getRefreshedList();
                
               
            })
        })

    }

    useEffect(() => {
        getRefreshedList();
       
    }, []);

    function deleteApi(id) {
        fetch(`http://localhost:3000/userdatabase/${id}`, {
            method: "DELETE"
        }).then((deleteres) => {
            deleteres.json().then((deleterespo) => {
                getRefreshedList();
            })
        });
    }
    function getRefreshedList() {
        fetch("http://localhost:3000/userdatabase").then((res) => {
            res.json().then((respo) => {
               
                setUserdata(respo);
                
            });
        });
        
    }
    function getPreviousValueInForm(id){

        
        getRefreshedList();
        setName(userdata[id-1].name);
        setEmail(userdata[id-1].email);
        setId(userdata[id-1].id);
        
    }
   function updateUserApi(){
       
       let toBeUpdatedData = { name, email,id }
       fetch(`http://localhost:3000/userdatabase/${id}`, {
           method: "PUT",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json"
           },
           body: JSON.stringify(toBeUpdatedData)
       }).then((resu) => {
           resu.json().then((resp) => {
               getRefreshedList();
              

           })
       })

       
       

   }

    return (
        <div className="container">
            <h1>
                <blockquote className="container">Post Api Example</blockquote>
            </h1>
            <div className="container">
                {updateOrSubmit?<h3>Insert Info</h3>:<h3>Update Info</h3>}
                <label htmlFor="userfull_name">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    id="userfull_name"
                />
                <br /> <br />
                <label htmlFor="userEmail">Email</label>
               
                <input
                    type="email"
                    id="userEmail"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br />
                <br />
                {
                    updateOrSubmit ? <button onClick={fetchApi}>Submit</button> :
                        <button onClick={() => { updateUserApi(); setUpdateOrSubmit(1); setName("");setEmail("")}}>Update</button>
                }
                
                
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => deleteApi(item.id)}>Delete</button></td>
                            <td><button onClick={()=>{getPreviousValueInForm(item.id);setUpdateOrSubmit(0)}}>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


           
           
           

        </div>
    );
}
