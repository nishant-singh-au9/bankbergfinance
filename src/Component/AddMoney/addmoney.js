import React from "react";
import "./addmoney.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import { addMoneyAction } from "../../Action/addMoneyAction"

class AddMoney extends React.Component {
    constructor() {
        super();

        this.state = {
            amount: 1000,
            account: ""
        };
    }

    submitHandler = () => {
        this.props.dispatch(addMoneyAction(this.state))
    }

    amountchangeHndler = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    renderaddmoney = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.props.success === "") {
                return (
                    <>
                        <div className="loginform">
                            <div className="card" id="logincard">
                                <center>
                                    <h2>Add Money</h2>
                                </center>
                                <div className="form-group">
                                    <h4>Hi {this.state.account.name},</h4>
                                    <span>Current Balance: {this.state.account.balance}</span>
                                    <p>Money will be added to Account: {this.state.account.account}</p>
                                    <label for="exampleInputPassword1">Amount:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Amount"
                                        onChange={this.amountchangeHndler}
                                        value={this.state.amount}
                                    />
                                </div>
                                <button
                                    className="btn btn-danger"
                                    id="loginbtn"
                                    onClick={this.submitHandler}
                                >
                                    Add Money
                  </button>
                            </div>
                        </div>
                    </>
                );
            } else {
                this.props.history.push("/dashboard");
            }
        } else {
            this.props.history.push("/login");
        }
    };

    render() {
        console.log("props", this.props)
        return (
            <>
                <DashNav />
                {this.renderaddmoney()}
            </>
        );
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
                console.log(data)
                this.setState({
                    account: data
                });
            });
    }
}

function mapStatetoProps(state) {
    console.log("state>>", state)
    if(!state.AddMoney){
        return {
            success: ""
        }
    }else{
        success: "Money Added"
    }
}

AddMoney.protoType = {
    dispatch: PropTypes.func,
};

export default connect(mapStatetoProps)(AddMoney);
