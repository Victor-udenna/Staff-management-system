import { Button } from '../../atoms/Button/Button'
import PayrollNavStyle from './PayrollNavStyle'

const PayrollNav = () => {
  return (
    <PayrollNavStyle>
      <nav className="payroll-nav">
        <div className="payroll-nav_container">
          <Button classname="payroll-nav_button" value="Gross Pay" />
          <Button classname="payroll-nav_button active" value="Net Pay" />
          <Button classname="payroll-nav_button" value="Tax and Deduction" />
          <Button classname="payroll-nav_button" value="Total Witholding" />
        </div>
      </nav>
    </PayrollNavStyle>
  )
}

export default PayrollNav
