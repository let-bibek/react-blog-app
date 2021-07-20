import React, { useRef, useEffect } from "react";
export default function PrevPropsAndPreRefChild(props) {
  const lastValue = useRef();
  useEffect(() => {
    lastValue.current = props.count;
  });
  let PreviousProps = lastValue.current;
  return (
    <div>
      <h1>
        <blockquote className="container">Previous props and Refs</blockquote>
      </h1>
      <h3>Current Number:{props.counter}</h3>
      <h3>Previous Number:{PreviousProps}</h3>
    </div>
  );
}
