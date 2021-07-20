import React,{useState} from 'react'

export default function UseOfConditions() {
const [loggedIn, setLoggedIn] = useState(1);
    return (
        <div>
            <h1>Use of Conditions</h1>
            {loggedIn?<h3>Welcome to your profile.</h3>:<h3>Please login to see your profile.{setLoggedIn(0)}</h3>}
        </div>
    )
}
