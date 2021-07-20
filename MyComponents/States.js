import React,{ Component} from 'react'
// functional component
// export default function States() {
//      const [number, setNumber] = useState(1);
//     function updateData(){

//         setNumber(number+1);
//     }

//     return (
//       <div>
//         <h5>
//           <center>This is all about States.</center>
//         </h5>

//         <center>{number}</center>
//         <br/><br/>
//         <br/><br/>
//         <button onClick={updateData}>Update</button>
//       </div>
//     );
// }


// class component
export default class States extends Component {

    constructor(){
        super();
        this.state={
            data:"Bibek"
        }
    }

    updateData(){
        this.setState({data:"Tika"});
    }
    render() {
        return (
          <div>
            <h5>
              <center>This is all about States using class component.</center>
            </h5>
            <center>{this.state.data}</center>
            <button
              className="btn waves-effect waves-light  blue-grey darken-1"
              onClick={() => this.updateData()}
            >
              Update
            </button>
          </div>
        );
    }
}

