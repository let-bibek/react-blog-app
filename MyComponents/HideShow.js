import React,{ useState} from 'react'

export default function HideShow() {
    const [state, setState] = useState(true);
   
    return (
      <div>
        {state ? <h3 className="dummyText">I'm dummy text.</h3> : null}
        <br />
        <br />
        <button
          onClick={() => setState(1)}
          className="btn waves-effect waves-light  blue-grey darken-1"
        >
          Show
        </button>
        <br />
        <br />
        <button
          className="btn waves-effect waves-light  blue-grey darken-1"
          onClick={() => {
            state ? setState(false) : setState(true);
          }}
        >
          {state ? "Hide" : "Show"}
        </button>
        <br />
        <br />
        <button
          onClick={() => setState(false)}
          className="btn waves-effect waves-light  blue-grey darken-1"
        >
          Hide
        </button>
      </div>
    );
}
