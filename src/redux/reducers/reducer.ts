import {combineReducers} from "redux";
import dataReducer from "./DataReducer";
import chatReducer from "./ChatReducer";
import saveAuthReducer from "./SaveAuthReducer";

export const rootReducer = combineReducers({
dataReducer,
chatReducer,
saveAuthReducer
})