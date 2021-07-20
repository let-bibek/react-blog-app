import React from 'react'
import { Link } from 'react-router-dom';
export default function DynamicRouting() {

    const users = [
        { id: 1, name: "Harry", email: "harry@abc.com" },
        { id: 2, name: "Sejal", email: "sejal@sejal.com" },
        { id: 3, name: "Riya", email: "riya@abc.com" },


    ]
    return (
      <div>
        <h1>
          <blockquote className="container">Dynamic Routing</blockquote>
        </h1>
        {users.map((item) => (
          <div key={item.id}>
            <Link to={"/users/" + item.id + "/" + item.name}>
              <h6>{item.name}</h6>
            </Link>
          </div>
        ))}
      </div>
    );
}
