import { useState } from 'react'
import EmployeeAnalysis from '../../Molecule/EmployeeAnalysis/EmployeeAnalysis'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import EmployeeTable from '../../Organism/EmployeeTable/EmployeeTable'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import EmployeeStyle from './EmployeeStyle'
import Chatlistdata from '../../../assets/data/Chatlistdata.json'
import AddEmployeeModal from '../../Organism/AddEmployeeModal/AddEmployeeModal'
import PopupModal from '../../Molecule/PopupModal/PopupModal'

const Employee = () => {
  const [isaddModal, setAddmodal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)

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
          <EmployeeTable employeedata={Chatlistdata} />
        </section>
      </main>
    </EmployeeStyle>
  )
}

export default Employee
