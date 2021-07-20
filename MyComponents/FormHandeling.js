import React,{useState} from "react";

export default function FormHandeling() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [favPerson, setFavPerson] = useState("");
    const [tc, setTc] = useState(1);
    function getFormData(e){
        e.preventDefault();
    }
    return (
      <div>
        <h2>Form handeling</h2>
        <div className="container">
          <h4>Name: {name}</h4>
          <h4>Email: {email}</h4>
          <h4>FavPerson: {favPerson}</h4>
          <h4>Terms and conditions: {tc}</h4>
        </div>
        <form onSubmit={getFormData}>
          <div className=" center">
            <div className="input-field col s6 ">
              <input
                id="full_name"
                type="text"
                className="validate"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="full_name">Full Name</label>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="center">
            <div className="input-field col s6 ">
              <input
                id="f_email"
                type="email"
                className="validate"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="f_email">Email</label>
            </div>
          </div>
          <br />
          <br />
          <select
            onChange={(e) => {
              setFavPerson(e.targer.value);
            }}
          >
            <option>Bibek</option>
            <option>Riya</option>
            <option>Sushil</option>
            <option>Aashish</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            id="t&c"
            onChange={(e) => {
              setTc(e.target.checked);
            }}
          />
          <label htmlFor="t&c">Accept T&C.</label>
          <br />
          <br />
          <button
            className="btn waves-effect waves-light  blue-grey darken-1"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right"></i>
          </button>
        </form>
      </div>
    );
}
