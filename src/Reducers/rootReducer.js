import { combineReducers } from "redux";
import Login from "./loginReducer";
import Register from "./registerReducer";
import Snap from "./snapReducer";
import DebitCard from "./debitCardReducer"
import AddMoney from "./addmoneyReducer"
import SendMoney from "./sendmoneyReducer"
import Transaction from "./transactionReducer"
import Recharge from "./rechargeBillReducer"

const rootReducer = combineReducers({ Login, Register, Snap, DebitCard, AddMoney, SendMoney,Transaction,Recharge});

export default rootReducer;
