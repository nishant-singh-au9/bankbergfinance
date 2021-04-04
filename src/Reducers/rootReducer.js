import { combineReducers } from "redux";
import Login from "./loginReducer";
import Register from "./registerReducer";
import Snap from "./snapReducer";
import DebitCard from "./debitCardReducer"
const rootReducer = combineReducers({ Login, Register, Snap, DebitCard });

export default rootReducer;
