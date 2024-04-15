import { Button } from '../../atoms/Button/Button'
import PayrollNavStyle from './PayrollNavStyle'
import { saveData } from '../../../redux/actions/DataAction'
import { useDispatch, useSelector } from 'react-redux'
import { TypedDispatch, RootStore } from '../../../Config/configstore'

const PayrollNav = () => {
  const payrollTab = useSelector(
    (state: RootStore) => state.dataReducer.result.data.payrolltab
  )
  const dispatch: TypedDispatch = useDispatch()

  const setToGrossPay = () => {
    dispatch(saveData({ payrolltab: 'Gross Pay' }))
  }

  const setToNetPay = () => {
    dispatch(saveData({ payrolltab: 'Net Pay' }))
  }

  const setToTholding = () => {
    dispatch(saveData({ payrolltab: 'Total witholding' }))
  }

  const setToTaxDeduction = () => {
    dispatch(saveData({ payrolltab: 'Tax and Deduction' }))
  }

  return (
    <PayrollNavStyle>
      <nav className="payroll-nav">
        <div className="payroll-nav_container">
          <Button
            onclick={setToGrossPay}
            classname={`${
              payrollTab === undefined || payrollTab === 'Gross Pay'
                ? 'payroll-nav_button active'
                : 'payroll-nav_button'
            }`}
            value="Gross Pay"
          />
          <Button
            onclick={setToNetPay}
            classname={`${
              payrollTab == 'Net Pay'
                ? 'payroll-nav_button active'
                : 'payroll-nav_button'
            }`}
            value="Net Pay"
          />
          <Button
            onclick={setToTaxDeduction}
            classname={`${
              payrollTab == 'Tax and Deduction'
                ? 'payroll-nav_button active'
                : 'payroll-nav_button'
            }`}
            value="Tax and Deduction"
          />
          <Button
            onclick={setToTholding}
            classname={`${
              payrollTab == 'Total witholding'
                ? 'payroll-nav_button active'
                : 'payroll-nav_button'
            }`}
            value="Total Witholding"
          />
        </div>
      </nav>
    </PayrollNavStyle>
  )
}

export default PayrollNav
