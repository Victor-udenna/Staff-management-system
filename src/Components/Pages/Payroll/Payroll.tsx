import PayrollStyle from './PayrollStyle'
import Text from '../../atoms/Text/Text'
import SideBar from '../../Organism/SideBar/Sidebar'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import PayrollAnalysis from '../../Organism/PayrollAnalysis/PayrollAnalysis'

const Payroll = () => {
  return (
    <PayrollStyle>
      <main className="container">
        <SideBar />
        <section className="payroll">
          <DashboardHeader
            buttontext="Add Payroll"
            buttonaction={() => {
              ('')
            }}
          />
          <Text classname="header_text" value={'Payroll'} />
          <PayrollAnalysis/>
        </section>
      </main>
    </PayrollStyle>
  )
}

export default Payroll
