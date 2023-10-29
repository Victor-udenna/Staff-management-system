import {combineReducers} from "redux";
import dataReducer from "./DataReducer";
import chatReducer from "./ChatReducer";

export const rootReducer = combineReducers({
dataReducer,
chatReducer
})