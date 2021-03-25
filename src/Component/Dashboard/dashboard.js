import React, { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderDashboard = () => {
    if (sessionStorage.getItem("ltk")) {
      return (
        <>
          <h1 style={{ color: "#ffffff" }}>I am the dashboard</h1>
        </>
      );
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return <>{this.renderDashboard()}</>;
  }
}

export default Dashboard;
