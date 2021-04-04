import { combineReducers } from "redux";
import Login from "./loginReducer";
import Register from "./registerReducer";
import Snap from "./snapReducer";
import DebitCard from "./debitCardReducer"
import AddMoney from "./addmoneyReducer"
const rootReducer = combineReducers({ Login, Register, Snap, DebitCard, AddMoney});

export default rootReducer;
