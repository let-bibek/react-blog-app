import React from 'react'
import ReactFragmentChild from './ReactFragmentChild'

export default function ReactFragments() {
    return (
        <div>
            <h1>
                <blockquote className="container">React Fragments</blockquote>
            </h1>

            <div className="max-size-limited container input-field col s12 center-align ">
                <select className="container ">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <ReactFragmentChild/>
                </select>
            </div>
        </div>
    )
}
