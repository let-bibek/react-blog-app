import React, { useState } from "react";

export default function GettingWithProps({ dataValues }) {
    const [data, setData] = useState(1);
    return (
      <div>
        <h1>{data ? dataValues : "hi"}</h1>
        <button
          className="btn waves-effect waves-light  blue-grey darken-1"
          onClick={() => setData(0)}
        >
          Show data?
        </button>
        <select name="nope" id="nope">
          <option value="Aashish">Aashish</option>
          <option value="Sushil">Sushil</option>
          <option value="Riya">Riya</option>
        </select>
      </div>
    );
}
