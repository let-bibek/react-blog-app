import React, { useEffect, useState,Fragment } from 'react'
import {  withRouter } from 'react-router-dom';
 function IndividualUsersRecords(props) {


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                setData(resp);
            })
        })

    }, [])
    return (
        <div className="row">
            <br /><br /><br />
            <div className="row container"><h6>Hi, I'm {
                data.map((item) => {
                    if (item.id == (props.match.params.id)) {
                            
                        return <Fragment key={item.id}>{item.name}</Fragment>


                    }

                }


                )
            }. My Details are given below.</h6></div>

                <br /><br /><br />
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                  { data.map((item)=>
                        
                        
                          
                       {
                      if (item.id==(props.match.params.id)){
                               
                          return (
                            <tr key={item.id}>
                              <td>{item.name}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                              <td>{item.address.city}</td>
                              <td>{item.phone}</td>
                              <td>
                                <a
                                  href={"http://www." + item.website}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.website}
                                </a>
                              </td>
                              <td>{item.company.name}</td>
                            </tr>
                          );
                               
                            
                           }
                           
                       }

                      
                   )}
                </tbody>
            </table>
        </div>
    )
}
export default withRouter(IndividualUsersRecords);