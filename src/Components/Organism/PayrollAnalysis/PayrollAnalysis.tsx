import PayrollAnalysisStyle from './PayrollAnalysisStly'
import Text from '../../atoms/Text/Text'
import { MdPeople } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaUserMinus } from 'react-icons/fa'

const PayrollAnalysis = () => {
  return (
<PayrollAnalysisStyle>
<div className="payroll_analysis">
    <button
      className={`analysis_card total ${'is_active'}`}
    >
      <div>
        <Text classname="analysis_header" value={30} />
        <Text classname="count" value={'All Payroll'} />
      </div>
      <MdPeople size={20} />
    </button>
    <button
      className={`analysis_card active ${'is_active'}`}
    >
      <div>
        <Text classname="analysis_header" value={20} />
        <Text classname="count" value={'Active Payroll'} />
      </div>
      <FaUserCheck color="#228b22" size={17} />
    </button>
    <button
      className={`analysis_card inactive ${'is_active'}`}
    >
      <div>
        <Text classname="analysis_header" value={20} />
        <Text classname="count" value={'Inactive Payroll'} />
      </div>
      <FaUserMinus color="red" size={17} />
    </button>
    <button
      className={`analysis_card Pending ${'is_active'}`}
    >
      <div>
        <Text classname="analysis_header" value={20} />
        <Text classname="count" value={'Pending Payroll'} />
      </div>
      <FaUserClock color="orange" size={17} />
    </button>
  </div>

</PayrollAnalysisStyle>
  )
}

export default PayrollAnalysis