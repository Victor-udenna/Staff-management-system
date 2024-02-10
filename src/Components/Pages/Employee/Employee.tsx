import { useEffect, useState } from 'react'
import EmployeeAnalysis from '../../Molecule/EmployeeAnalysis/EmployeeAnalysis'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import EmployeeStyle from './EmployeeStyle'
import AddEmployeeModal from '../../Organism/AddEmployeeModal/AddEmployeeModal'
import PopupModal from '../../Molecule/PopupModal/PopupModal'
import { collection, getDocs, query, where } from 'firebase/firestore'
import EmployeeTable from '../../Organism/EmployeeTable/EmployeeTable'
import { db } from '../../../Config/firebase-config'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'
import EmptyState from '../../Organism/EmptyState/EmptyState'
import Loader from '../../Organism/Loader/Loader'

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
  const [isloading, setislLoading] = useState(false)
  const userId = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data.uid
  )

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
    setislLoading(true)
    try {
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
      setislLoading(false)
    } catch (err) {
      console.log(err)
      setislLoading(false)
    }
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

      {isloading && <Loader />}
      <main className="container">
        <SideBar />
        <section className="employee">
          <DashboardHeader
            buttontext={'Add employee'}
            placeholder={'Search employee'}
            buttonaction={openAddemployeeModal}
          />

          {employeeData.length > 0 ? (
            <>
              <Text classname="header_text" value={'Employee'} />
              <EmployeeAnalysis />
              <EmployeeTable employeedata={employeeData} />
            </>
          ) : (
            <EmptyState
              title={'No Employee Found'}
              desc={`Click "Add Employee" to add employee`}
            />
          )}
        </section>
      </main>
    </EmployeeStyle>
  )
}

export default Employee
