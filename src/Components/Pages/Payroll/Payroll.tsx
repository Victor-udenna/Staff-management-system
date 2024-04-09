import PayrollStyle from './PayrollStyle'
import Text from '../../atoms/Text/Text'
import SideBar from '../../Organism/SideBar/Sidebar'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import PayrollAnalysis from '../../Organism/PayrollAnalysis/PayrollAnalysis'
import { MdHistory } from 'react-icons/md'
import GrossPayment from '../../Organism/GrossPayment/GrossPayment'
import NetPayment from '../../Organism/NetPayment/NetPayment'
import THolding from '../../Organism/THolding/THolding'
import TaxDeduction from '../../Organism/TaxDeduction/TaxDeduction'

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
          <div className="payroll-button__container">
            <Text classname="header_text" value={'Payroll'} />
            <button className="transaction-button">
              <Text
                value={'Transaction History'}
                classname="transaction-button__text"
              />
              <MdHistory color="#228b22" size={18} />
            </button>
          </div>
          <PayrollAnalysis />
          <GrossPayment />
          {/* <NetPayment /> */}
          {/* <THolding /> */}
          {/* <TaxDeduction /> */}
        </section>
      </main>
    </PayrollStyle>
  )
}

export default Payroll
