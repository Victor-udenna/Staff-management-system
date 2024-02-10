// import { useState, useEffect } from 'react'
// import { collection, getDocs, query, where } from 'firebase/firestore'
// import { db } from '../Config/firebase-config'

// type UserData = {
//   createdById: string
//   email: string
//   employment_type: string
//   first_name: string
//   id: string
//   is_active: boolean
//   job_title: string
//   last_name: string
//   location: string
//   phone_number: string
//   status: string
// }

// const useEmployeelist = (userId: string) => {
//   const employeeDataRef = collection(db, 'Employees')
//   const [isLoading, setIsLoading] = useState(false)
//   const [employeeData, setEmployeeData] = useState<Array<UserData>>([])

//   useEffect(() => {
//     const getEmployeeList = async () => {
//       setIsLoading(true)
//       try {
//         const employeeDataCollection = employeeDataRef
//         const employeeQuery = query(
//           employeeDataCollection,
//           where('createdById', '==', userId)
//         )
//         const querysnapshot = await getDocs(employeeQuery)
//         const fetchdata: Array<UserData> = []
//         querysnapshot.forEach((doc) => {
//           fetchdata.push({ id: doc.id, ...doc.data() } as UserData)
//         })

//         setEmployeeData(fetchdata)
//         setIsLoading(false)
//       } catch (err) {
//         console.log(err)
//         setIsLoading(false)
//       }
//     }
//     getEmployeeList()
//   }, [userId, employeeDataRef])

//   return { isLoading, employeeData }
// }

// export default useEmployeelist
