import PayrollStyle from './PayrollStyle'
import Text from '../../atoms/Text/Text'
import SideBar from '../../Organism/SideBar/Sidebar'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import { MdHistory } from 'react-icons/md'
import GrossPayment from '../../Organism/GrossPayment/GrossPayment'
import NetPayment from '../../Organism/NetPayment/NetPayment'
import { useNavigate } from 'react-router-dom'
import PayrollNav from '../../Organism/PayrollNav/PayrollNav'
import THolding from '../../Organism/THolding/THolding'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'
import TaxDeduction from '../../Organism/TaxDeduction/TaxDeduction'

const Payroll = () => {
  const navigate = useNavigate()

  const gotoTransactions = () => {
    navigate('/payroll/transactions')
  }

  const payrollTab = useSelector(
    (state: RootStore) => state.dataReducer.result.data.payrolltab
  )
  console.log(payrollTab)

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
            <button onClick={gotoTransactions} className="transaction-button">
              <Text
                value={'Transaction History'}
                classname="transaction-button__text"
              />
              <MdHistory color="#228b22" size={18} />
            </button>
          </div>
          <PayrollNav />
          {(payrollTab == undefined || payrollTab == 'Gross Pay') && <GrossPayment />}
          {payrollTab == 'Net Pay' && <NetPayment />}
          {payrollTab == 'Total witholding' && <THolding />}
          {payrollTab == 'Tax and Deduction' && <TaxDeduction />}
        </section>
      </main>
    </PayrollStyle>
  )
}

export default Payroll
