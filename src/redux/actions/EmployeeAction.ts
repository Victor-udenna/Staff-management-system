import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Config/firebase-config'
import {
  fetchEmployeeListRequest,
  fetchEmployeeListSuccess,
  fetchEmployeeListFailure
} from './EmployeeActionType'
import { Dispatch } from 'redux'
import { UserData } from '../../Components/Pages/Employee/Employee'

export const fetchEmployeeList = (userId: string) => async (dispatch: Dispatch) => {
  dispatch(fetchEmployeeListRequest())
  try {
    const employeeDataCollection = collection(db, 'Employees')
    const employeeQuery = query(
      employeeDataCollection,
      where('createdById', '==', userId)
    )
    const querySnapshot = await getDocs(employeeQuery)
    const fetchData: UserData[] = []
    querySnapshot.forEach((doc) => {
      fetchData.push({ id: doc.id, ...doc.data() } as UserData)
    })
    dispatch(fetchEmployeeListSuccess(fetchData))
  } catch (error: string | any) {
    console.error(error)
    dispatch(fetchEmployeeListFailure(error.message));
  }
}
