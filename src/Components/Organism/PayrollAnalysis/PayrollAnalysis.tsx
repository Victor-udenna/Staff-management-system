import PayrollAnalysisStyle from './PayrollAnalysisStly'
import Text from '../../atoms/Text/Text'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import { TbDatabaseDollar } from 'react-icons/tb'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { FaChartPie } from 'react-icons/fa'

const PayrollAnalysis = () => {
  return (
    <PayrollAnalysisStyle>
      <div className="payroll_analysis">
        <button className={`analysis_card total ${'is_active'}`}>
          <div>
            <Text classname="analysis_header" value={30} />
            <Text classname="count" value={'Gross Payment'} />
          </div>
          <LiaFileInvoiceDollarSolid size={20} />
        </button>
        <button className={`analysis_card active ${'is_active'}`}>
          <div>
            <Text classname="analysis_header" value={20} />
            <Text classname="count" value={'Net Payment'} />
          </div>
          <FaHandHoldingDollar color="#228b22" size={18} />
        </button>
        <button className={`analysis_card inactive ${'is_active'}`}>
          <div>
            <Text classname="analysis_header" value={20} />
            <Text classname="count" value={'Tax and Deduction'} />
          </div>
          <FaChartPie color="red" size={17} />
        </button>
        <button className={`analysis_card Pending ${'is_active'}`}>
          <div>
            <Text classname="analysis_header" value={20} />
            <Text classname="count" value={'Total Withholding'} />
          </div>
          <TbDatabaseDollar color="orange" size={17} />
        </button>
      </div>
    </PayrollAnalysisStyle>
  )
}

export default PayrollAnalysis
