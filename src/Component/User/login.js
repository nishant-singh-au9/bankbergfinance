import React from "react";
import LoginSVG from "./login.svg";
import "./login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <>
        <div className="row"></div>
        <div className="container c">
          <div className="row">
            <div className="col-md-6 e">
              <img src={LoginSVG} alt="loginsvg" height="300px" width="300px" />
            </div>
            <div className="col-md-6 e">
              <input placeholder="enter email" />
              <br />
              <input placeholder="enter password" />
              <br />
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
