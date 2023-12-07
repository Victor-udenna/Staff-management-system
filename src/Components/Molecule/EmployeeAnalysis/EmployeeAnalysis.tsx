import EmployeeAnalysisStyle from './EmployeeAnalysisStyle'
import Text from '../../atoms/Text/Text'
import { MdPeople } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaUserMinus } from 'react-icons/fa'

const EmployeeAnalysis = () => {
  return (
    <EmployeeAnalysisStyle>
      <div className="employee_analysis">
        <div className="analysis_card total">
          <div>
            <Text classname="analysis_header" value="All Employee" />
            <Text classname="count" value={20} />
          </div>
          <MdPeople size={20} />
        </div>
        <div className="analysis_card active">
          <div>
            <Text classname="analysis_header" value="Active Employee" />
            <Text classname="count" value={11} />
          </div>
          <FaUserCheck size={17} />
        </div>
        <div className="analysis_card inactive">
          <div>
            <Text classname="analysis_header" value="Inactive Employee" />
            <Text classname="count" value={5} />
          </div>
          <FaUserMinus size={17} />
        </div>
        <div className="analysis_card pending">
          <div>
            <Text classname="analysis_header" value="Pending Employee" />
            <Text classname="count" value={4} />
          </div>
          <FaUserClock size={17} />
        </div>
      </div>
    </EmployeeAnalysisStyle>
  )
}

export default EmployeeAnalysis
