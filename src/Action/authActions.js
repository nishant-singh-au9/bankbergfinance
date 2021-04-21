export function loginUser(user) {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUser(data));
      });
  };
}

export function setUser(data) {
  return {
    type: "USER_LOGGEDIN",
    payload: data
  };
}

export function registerUser(user) {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(createUser(data));
      });
  };
}

export function createUser(data) {
  return {
    type: "USER_REGISTER",
    payload: data
  };
}


export const logoutUser = () => dispatch => {
  sessionStorage.removeItem("ltk");
  dispatch(setUser({}));
};

export function updatePassword(user) {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/users/updatePassword", {
      method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("ltk")
        },
        body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then((data) => { 
          dispatch(passwordupdate(data));
        });
    };
  }

export function passwordupdate(data) {
  return {
    type: "UPDATE_PASSWORD",
    payload: data
  };
}



//login with otp 

export function otplogin(user) {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/users/verifyOtp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data>>>>>>>>>>",data)
        if (data.token) {
          sessionStorage.setItem("ltk", data.token);
        }
        dispatch(loginotp(data));
      });
  };
}

export function loginotp(data) {
  return {
    type: "OTP_LOGIN",
    payload: data
  };
}