import React from "react";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return <h1>Register Component</h1>;
  }
}

export default Register;
