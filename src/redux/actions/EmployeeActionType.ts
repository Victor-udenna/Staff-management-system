import { UserData } from '../../Components/Pages/Employee/Employee'

export const FETCH_EMPLOYEE_LIST_REQUEST = 'FETCH_EMPLOYEE_LIST_REQUEST'
export const FETCH_EMPLOYEE_LIST_SUCCESS = 'FETCH_EMPLOYEE_LIST_SUCCESS'
export const FETCH_EMPLOYEE_LIST_FAILURE = 'FETCH_EMPLOYEE_LIST_FAILURE'

export const fetchEmployeeListRequest = () => ({
  type: FETCH_EMPLOYEE_LIST_REQUEST as typeof FETCH_EMPLOYEE_LIST_REQUEST,
})

export const fetchEmployeeListSuccess = (data: UserData[]) => ({
  type: FETCH_EMPLOYEE_LIST_SUCCESS as typeof FETCH_EMPLOYEE_LIST_SUCCESS,
  payload: data,
})

export const fetchEmployeeListFailure = (error: string) => ({
  type: FETCH_EMPLOYEE_LIST_FAILURE as typeof FETCH_EMPLOYEE_LIST_FAILURE,
  payload: error,
})
