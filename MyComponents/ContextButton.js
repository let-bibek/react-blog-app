import React from 'react'
import { CommonContext } from './CommonContext';
export default function ContextButton() {
    return (
      <div>
        <CommonContext.Consumer>
          {({ updateColor }) => (
            <div>
              <button onClick={() => updateColor("olive")}>Change Color</button>
              <button onClick={() => updateColor("orangered")}>Change Color</button>
            </div>
          )}
        </CommonContext.Consumer>
      </div>
    );
}
