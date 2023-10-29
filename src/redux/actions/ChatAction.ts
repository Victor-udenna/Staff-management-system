import { Dispatch } from "redux";
import { ChatDispatchType, SAVE_CHAT, CLEAR_CHAT } from "./ChatActionType";

export const saveChat = (data: object)=>
 async ( dispatch: Dispatch<ChatDispatchType>)=>{
dispatch({
    type: SAVE_CHAT,
    data,
});
}

export const clearChat = ()=> async(dispatch: Dispatch<ChatDispatchType>)=>{
dispatch({
    type: CLEAR_CHAT
})
}