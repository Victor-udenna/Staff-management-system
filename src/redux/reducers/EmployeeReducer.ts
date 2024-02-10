import { FETCH_EMPLOYEE_LIST_FAILURE, FETCH_EMPLOYEE_LIST_REQUEST, FETCH_EMPLOYEE_LIST_SUCCESS } from "../actions/EmployeeActionType";
  
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_EMPLOYEE_LIST_REQUEST:
        return { ...state, isLoading: true, error: null };
  
      case FETCH_EMPLOYEE_LIST_SUCCESS:
        return { ...state, isLoading: false, data: action.payload, error: null };
  
      case FETCH_EMPLOYEE_LIST_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  