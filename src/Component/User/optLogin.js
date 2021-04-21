import React from 'react'
import { otplogin } from "../../Action/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class OtpLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.email,
            otp: ""
        }
    }




    otpChangeHandler = (e) => {
        this.setState({
            otp: e.target.value,
            err: ""
        })
    }

    submitHandler = () => {
        let {email, otp} = this.state
        if(!otp){
            this.setState({err: "Enter OTP"})
        }else{
            document.getElementById('otpbutton').innerText = 'Taking you in ...'
            this.props.dispatch(otplogin({email, otp : parseInt(otp)}))
        }
    }

    render() {
        console.log(this.props)
        return (
            <>
                <center>
                    <h3>OTP SENT</h3>
                    <p className="error">{this.state.err}</p>
                    <p className="error">{this.props.err}</p>
                </center>
                <p className="loginp">OTP:</p>
                <input
                    type="number"
                    placeholder="Enter OTP"
                    id="myInput"
                    value={this.state.otp}
                    onChange={this.otpChangeHandler}
                />
                <button
                    className="btn btn-primary"
                    id="otpbutton"
                    onClick={this.submitHandler}
                >
                    Submit
                </button>
            </>
        )
    }
}

function mapStatetoProps(state) {
    console.log(state)
    if(!state.OtpLogin){
        return {
            err: ""
        }
    }else{
        if(state.OtpLogin.error){
            return {
                err: state.OtpLogin.error
            }
        }
        else{
            return {
                err: ""
            }
        }
    }
}

OtpLogin.protoType = {
    dispatch: PropTypes.func
};


export default connect(mapStatetoProps)(OtpLogin)