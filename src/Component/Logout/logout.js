import React from 'react'
import {logoutUser} from '../../Action/authActions'
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Logout extends React.Component{
    constructor(){
        super()

        this.state={}
    }

    renderLogout = () => {
        if(sessionStorage.getItem('ltk')){
            return(
                <>
                <h1>you are loggedin and this page is in development</h1>
                </>
            )
        }else{
            this.props.history.push('/login')
        }
    }
    render(){
        return(
            <>
            {this.renderLogout()}
            </>
        )
    }

    componentDidMount(){
        this.props.dispatch(logoutUser());
    }
}

function mapStatetoProps(state) {
    console.log(state);
    if (!state.Snap) {
      return {
        data: "",
        err: ""
      };
    } else {
      if (state.Snap.error) {
        return {
          data: "",
          err: "Something Went Wrong"
        };
      } else {
        return {
          data: state.Snap,
          err: ""
        };
      }
    }
  }

Logout.protoType = {
    dispatch: PropTypes.func
  };

export default connect(mapStatetoProps)(Logout);