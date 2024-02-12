import { useEffect, useState } from 'react'
import EmployeeAnalysis from '../../Molecule/EmployeeAnalysis/EmployeeAnalysis'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import EmployeeStyle from './EmployeeStyle'
import AddEmployeeModal from '../../Organism/AddEmployeeModal/AddEmployeeModal'
import PopupModal from '../../Molecule/PopupModal/PopupModal'
import EmployeeTable from '../../Organism/EmployeeTable/EmployeeTable'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore, TypedDispatch } from '../../../Config/configstore'
import EmptyState from '../../Organism/EmptyState/EmptyState'
import Loader from '../../Organism/Loader/Loader'
import { fetchEmployeeList } from '../../../redux/actions/EmployeeAction'

export type UserData = {
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
  const [isaddModal, setAddmodal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const dispatch: TypedDispatch = useDispatch()
  const userId = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data.uid
  )
  const filtertext = useSelector(
    (state: RootStore) => state.dataReducer.result.data.id
  )

  console.log(filtertext)
  const { isLoading, data: employeeData } = useSelector(
    (state: RootStore) => state.employeeReducer
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

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchEmployeeList(userId))
    }
    fetchData()
  }, [dispatch, userId])

  console.log(employeeData)

  const filteredEmployeeData =
    filtertext == 'all'
      ? employeeData
      : employeeData.filter(
          (employee: UserData) => employee.status == filtertext
        )

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

      {isLoading && <Loader />}
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
              <EmployeeTable employeedata={filteredEmployeeData} />
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
