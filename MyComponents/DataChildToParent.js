import React from 'react'

export default function DataChildToParent(props) {
    return (
      <div>
        <button
          className="btn waves-effect waves-light  blue-grey darken-1"
          onClick={() => {
            props.dataToChild("ram");
          }}
        >
          Test Button
        </button>
      </div>
    );
}
