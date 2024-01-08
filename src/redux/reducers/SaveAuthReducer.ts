import { SAVE_AUTH, CLEAR_AUTH, SaveAuthDispatchType } from "../actions/SaveAuthActionType"

export interface DefaultState {
  result: any
}

const defaultState: DefaultState = {
  result: {
    data: {},
  },
}


const saveAuthReducer = ( state: DefaultState = defaultState, action: SaveAuthDispatchType)=>{
    switch(action.type){
    case SAVE_AUTH:
    return {
        ...state,
        result: {
            ...state.result,
            data: action.data
        }
    }

    case CLEAR_AUTH:
    return {
        ...state,
        result: {
        data: {}    
        }
 
    }
    default:
        return state  
    }
}

export default saveAuthReducer;