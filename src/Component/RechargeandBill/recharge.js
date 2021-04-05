import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./recharge.css"
import DashNav from "../Layout/dashNav";
import Loader from "../../loader.svg";

class Recharge extends React.Component {
    constructor() {
        super();

        this.state = {
            amount : 150,
            opertaor : "Airtel",
            number : "7979868224",
            circle : "Bihar Jharkhand",
            type : "Mobile Recharge",
            err: "",
            account: ""
        }
    }

    amountchangeHndler = (event) => {
        this.setState({
            amount: event.target.value, err: ""
        })
    }

    operatorchangeHndler = (event) => {
        this.setState({
            operator: event.target.value, err: ""
        })
    }

    numberchangeHndler = (event) => {
        this.setState({
            number: event.target.value, err: ""
        })
    }

    circlechangeHndler = (event) => {
        this.setState({
            circle: event.target.value, err: ""
        })
    }

    renderRecharge = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.props.success === "") {
                if (this.state.account) {
                    return (
                        <>
                            <div className="loginform">
                                <div className="card" id="logincard">
                                    <center>
                                        <h2>Send Money</h2>
                                    </center>
                                    <div className="form-group">
                                        <h4>Hi {this.state.account.name},</h4>
                                        <span>Current Balance: {this.state.account.balance}</span>
                                        <p>Money will be debited from Account: {this.state.account.account}</p>
                                        <center>
                                            <p style={{ color: "red", fontWeight: "bold" }}>{this.props.err}</p>
                                            <p style={{ color: "red", fontWeight: "bold" }}>{this.state.err}</p>
                                            <p style={{ color: "green", fontWeight: "bold" }}>{this.props.succ}</p>
                                        </center>
                                        <label for="exampleInputPassword1"><b>Amount:</b></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Enter Amount"
                                            onChange={this.amountchangeHndler}
                                            value={this.state.amount}
                                        />

                                        <label for="exampleInputPassword1"><b>Recepient Account Number:</b></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Account Number"
                                            onChange={this.receipntchangeHndler}
                                            value={this.state.receipnt}
                                        />

                                        <label for="exampleInputPassword1"><b>Transaction Password:</b></label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Enter Transaction Password"
                                            onChange={this.transactionPasswordchangeHndler}
                                            value={this.state.transactionPassword}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-danger"
                                        id="loginbtn"
                                        onClick={this.submitHandler}
                                    >
                                        Send Money
                      </button>
                                </div>
                            </div>
                        </>
                    );
                } else {
                    return (
                        <>
                            <center><img src={Loader} alt="loader" /></center>
                        </>
                    )
                }
            } else {
                this.props.history.push("/dashboard");
            }
        } else {
            this.props.history.push("/login");
        }
    
    }
    render() {
        return (
            <>
            <DashNav/>
            {this.renderRecharge()}
            </>
        )
    }

    componentDidMount() {
        fetch("https://bankbergfinanceapi.herokuapp.com/api/users/userInfo", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("ltk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    account: data
                });
            });
    }

    componentDidUpdate() {
        fetch("https://bankbergfinanceapi.herokuapp.com/api/users/userInfo", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("ltk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if(document.getElementById('loginbtn')){
                    document.getElementById('loginbtn').innerText = "Send Money"
                }
                this.setState({
                    account: data
                });
            });
    }
        
}


function mapStatetoProps(state) {
    console.log(state);
    if (!state.SendMoney) {
        return {
            err: "",
            succ: "",
            success: ""
        }
    } else {
        if (state.SendMoney.error) {
            return {
                err: state.SendMoney.error,
                succ: "", success: ""
            }
        } else {
            return { err: "", succ: state.SendMoney.message, success: "" }
        }
    }
}

Recharge.protoType = {
    dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(Recharge);