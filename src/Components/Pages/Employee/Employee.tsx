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
import useEmployeeCount from '../../../hooks/useEmployeeCount'
import FetchMore from '../../Molecule/FetchMore/FetchMore'

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
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch: TypedDispatch = useDispatch()
  const userId = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data.uid
  )
  const filtertext = useSelector(
    (state: RootStore) => state.dataReducer.result.data.id
  )
  const { isLoading, data: employeeData } = useSelector(
    (state: RootStore) => state.employeeReducer
  )

  const { totalemployee, activeemployee, inactiveemployee, pendingemployee } =
    useEmployeeCount(employeeData)

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

  const filteredEmployeeData =
    filtertext == 'all' || filtertext == undefined
      ? employeeData
      : employeeData.filter(
          (employee: UserData) => employee.status == filtertext
        )

  const handleDataSearch = () => {
    if (searchTerm === '') {
      return filteredEmployeeData
    } else {
      return filteredEmployeeData.filter(
        (employee: UserData) =>
          employee.first_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          employee.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.job_title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  }

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
            setSearchTerm={setSearchTerm}
          />

          {employeeData.length > 0 ? (
            <>
              <Text classname="header_text" value={'Employee'} />
              <EmployeeAnalysis
                total={totalemployee}
                active={activeemployee}
                inactive={inactiveemployee}
                pending={pendingemployee}
              />
              <EmployeeTable employeedata={handleDataSearch()} />
              <FetchMore/>
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
