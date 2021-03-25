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
        if (data.token) {
          sessionStorage.setItem("ltk", data.token);
        }
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
