import EmployeeAnalysis from '../../Molecule/EmployeeAnalysis/EmployeeAnalysis'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import EmployeeTable from '../../Organism/EmployeeTable/EmployeeTable'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import EmployeeStyle from './EmployeeStyle'
import Chatlistdata from '../../../assets/data/Chatlistdata.json'


const Employee = () => {

  console.log(Chatlistdata)
  return (
    <EmployeeStyle>
      <main className="container">
        <SideBar />
        <section className="employee">
          <DashboardHeader
            buttontext={'Add employee'}
            placeholder={'Search employee'}
          />
          <Text classname="header_text" value={'Employee'} />
          <EmployeeAnalysis />
          <EmployeeTable employeedata={Chatlistdata}/>
        </section>
      </main>
    </EmployeeStyle>
  )
}

export default Employee
