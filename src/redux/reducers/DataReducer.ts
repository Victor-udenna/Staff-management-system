import { DataDispatchType, SAVE_DATA, DATA_CLEAR } from "../actions/DataActionType";

export interface DefaultState {
    result: any;
}

const defaultState : DefaultState = {
    result: {
        data: {}
    },
};


const dataReducer = (state: DefaultState = defaultState , action: DataDispatchType)=>{

switch(action.type){
 case SAVE_DATA: 
 return {
    ...state,
    result: {
    ...state.result,
    data: action.data
    }
 }   

 case DATA_CLEAR:
    return{
        ...state,
        result: {
            data: {}
        }
    }

    default:
 return state
}

};

export default dataReducer;