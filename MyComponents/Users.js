import React from 'react'
import { withRouter } from 'react-router-dom';
 function Users(props) {
    return (
      <div>
        <h1>User Component</h1>
        <h6>
          Hi, {props.match.params.name}({props.match.params.id})
        </h6>
      </div>
    );
}
export default withRouter(Users);