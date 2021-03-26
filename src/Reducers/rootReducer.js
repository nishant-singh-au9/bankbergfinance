import { combineReducers } from "redux";
import Login from "./loginReducer";
import Register from "./registerReducer";

const rootReducer = combineReducers({ Login, Register });

export default rootReducer;
