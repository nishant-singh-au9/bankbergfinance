export default function (state = null, action) {
    switch (action.type) {
      case "OTP_LOGIN":
        return action.payload;
      default:
        return null;
    }
  }