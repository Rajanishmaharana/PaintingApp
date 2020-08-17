import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function Register() {
  let [register, setRegister] = useState({});
  const history = useHistory();
  let inputHandel = (e) => {
    console.log(e.target.value);
    setRegister({user:e.target.value});
  };
  let sub = () => {

  // alert(JSON.stringify(register));
console.log(register.user)
  history.push("/board/"+register.user);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-8"></div>
        <div className="col-sm-4">
          <div className="col-sm-12">
            <form onSubmit={sub}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={register.user}
                  onChange={(e) => inputHandel(e)}
                />
              </div>
              <div className="form-group text-right">
                <button className="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
