import { useEffect, useState } from 'react'
import EmployeeAnalysis from '../../Molecule/EmployeeAnalysis/EmployeeAnalysis'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import EmployeeTable from '../../Organism/EmployeeTable/EmployeeTable'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import EmployeeStyle from './EmployeeStyle'
import AddEmployeeModal from '../../Organism/AddEmployeeModal/AddEmployeeModal'
import PopupModal from '../../Molecule/PopupModal/PopupModal'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '../../../Config/firebase-config'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'

type UserData = {
  createdById: string
  email: string
  employment_type: string
  first_name: string
  id: string
  is_active: boolean
  job_title: string
  last_name: string
  location: string
  phone_number: string
  status: string
}

const Employee = () => {
  const employeeDataRef = collection(db, 'Employees')
  const [isaddModal, setAddmodal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const [employeeData, setEmployeedata] = useState<Array<UserData>>([])
  const userId = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data.uid
  )
  console.log(userId)

  const closeAddemployeeModal = () => {
    setAddmodal(false)
  }

  const openSuccessModal = () => {
    setSuccessModal(true)
  }

  const openAddemployeeModal = () => {
    setAddmodal(true)
  }

  const reloadPage = () => {
    window.location.reload()
  }

  const closeSuccessModal = () => {
    setSuccessModal(false)
  }

  const getEmployeeList = async () => {
    const employeeDataCollection = employeeDataRef
    const employeeQuery = query(
      employeeDataCollection,
      where('createdById', '==', userId)
    )
    const querysnapshot = await getDocs(employeeQuery)
    const fetchdata: Array<UserData> = []
    querysnapshot.forEach((doc) => {
      fetchdata.push({ id: doc.id, ...doc.data() } as UserData)
    })

    setEmployeedata(fetchdata)
  }

  useEffect(() => {
    getEmployeeList()
  }, [])

  console.log(employeeData)

  return (
    <EmployeeStyle>
      {isaddModal && (
        <AddEmployeeModal
          closeModal={closeAddemployeeModal}
          showSuccessModal={openSuccessModal}
        />
      )}
      {isSuccessModal && (
        <PopupModal
          closeSuccessModal={closeSuccessModal}
          reloadPage={reloadPage}
          headerText="Success"
          text="Employee added succesfully"
        />
      )}
      <main className="container">
        <SideBar />
        <section className="employee">
          <DashboardHeader
            buttontext={'Add employee'}
            placeholder={'Search employee'}
            buttonaction={openAddemployeeModal}
          />
          <Text classname="header_text" value={'Employee'} />
          <EmployeeAnalysis />
          <EmployeeTable employeedata={employeeData} />
        </section>
      </main>
    </EmployeeStyle>
  )
}

export default Employee
