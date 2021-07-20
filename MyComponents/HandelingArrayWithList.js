import React from 'react'

export default function HandelingArrayWithList() {
    const employees=[
        {name:"Hari",
        salary:123456,
        id:1,
    },
    {
        name:"Shyam",
        salary:"1145",
        id: 2,
    },
        {
            name: "Radha",
            salary: "32687",
            id: 3,
        }
    ]
    return (
        <div className="container">
            <h1 ><blockquote className="container">Handeling Array with List</blockquote></h1>

            <table border="1" className="highlight blue-grey darken-4 white-text">
                <caption><em>Employees Details</em></caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary(Rs.)</th>
                    </tr>
                </thead>

                <tbody>
                   
                    {employees.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>

                            <td>{item.salary}</td>
                        </tr>


                    )}
                </tbody>
            </table>

           
        </div>
    )
}
