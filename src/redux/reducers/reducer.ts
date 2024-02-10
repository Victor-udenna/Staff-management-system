import {combineReducers} from "redux";
import dataReducer from "./DataReducer";
import chatReducer from "./ChatReducer";
import saveAuthReducer from "./SaveAuthReducer";
import employeeReducer from "./EmployeeReducer";

export const rootReducer = combineReducers({
dataReducer,
chatReducer,
saveAuthReducer,
employeeReducer
})