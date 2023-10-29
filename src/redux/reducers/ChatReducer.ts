import {ChatDispatchType, SAVE_CHAT, CLEAR_CHAT} from "../actions/ChatActionType";

export interface DefaultState{
    result: any;
}


const defaultState : DefaultState = {
    result: {
        data: {}
    }
};


const chatReducer = (state: DefaultState = defaultState, action: ChatDispatchType)=>{
    switch(action.type){
     case SAVE_CHAT: 
     return {
        ...state,
        result: {
       ...state.result,
       data: action.data     
        }
     }  
     
     case CLEAR_CHAT: 

     return {
     ...state,
     result:{
        data: {}
     }   
     }

     default:
     
     return state
    }
    
}

export default chatReducer;