import { combineReducers } from "redux";
import Login from "./loginReducer";
import Register from "./registerReducer";
import Snap from "./snapReducer";
import DebitCard from "./debitCardReducer"
import AddMoney from "./addmoneyReducer"
import SendMoney from "./sendmoneyReducer"

const rootReducer = combineReducers({ Login, Register, Snap, DebitCard, AddMoney, SendMoney});

export default rootReducer;
