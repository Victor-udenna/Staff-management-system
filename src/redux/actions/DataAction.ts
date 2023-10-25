import { Dispatch } from "redux";
import { DataDispatchType, SAVE_DATA, DATA_CLEAR } from "./DataActionType";

export const saveData = (data: object)=> async (
    dispatch: Dispatch<DataDispatchType>
)=>{
    dispatch({
        type: SAVE_DATA,
        data,
    });
}

export const clearData =()=> async(
    dispatch: Dispatch<DataDispatchType>,
)=>{
dispatch({
    type: DATA_CLEAR
})
}