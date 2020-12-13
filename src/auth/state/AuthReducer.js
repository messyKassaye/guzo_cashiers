import {combineReducers} from "redux";
import BankReducer from "./reducer/BankReducer";
import BusesReducer from "./reducer/BusesReducer";
import CashiersReducer from "./reducer/CashiersReducer";
import DialogReducer from "./reducer/DialogReducer";
import DriverAssistantReducer from "./reducer/DriverAssistantReducer";
import UsersReducer from "./reducer/UsersReducer";
export default combineReducers({
   userReducer:UsersReducer,
   busesReducer:BusesReducer,
   dialogReducer:DialogReducer,
   bankReducer:BankReducer,
   driverAssistantReducer:DriverAssistantReducer,
   cashiersReducer:CashiersReducer
})