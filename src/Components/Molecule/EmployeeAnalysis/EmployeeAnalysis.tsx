import EmployeeAnalysisStyle from './EmployeeAnalysisStyle'
import Text from '../../atoms/Text/Text'
import { MdPeople } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaUserMinus } from 'react-icons/fa'
import { useState } from 'react'

const EmployeeAnalysis = () => {
  const [filterText, setFilterText] = useState<string>('all')

  return (
    <EmployeeAnalysisStyle>
      <div className="employee_analysis">
        <button
          onClick={() => {
            setFilterText('all')
          }}
          className={`analysis_card total ${
            filterText == 'all' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="20" />
            <Text classname="count" value={"All Employee"} />
          </div>
          <MdPeople size={20} />
        </button>
        <button
          onClick={() => {
            setFilterText('active')
          }}
          className={`analysis_card active ${
            filterText == 'active' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="11" />
            <Text classname="count" value={"Active Employee"} />
          </div>
          <FaUserCheck color="#228b22" size={17} />
        </button>
        <button
          onClick={() => {
            setFilterText('inactive')
          }}
          className={`analysis_card inactive ${
            filterText == 'inactive' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="5" />
            <Text classname="count" value={"Inactive Employee"} />
          </div>
          <FaUserMinus color="red" size={17} />
        </button>
        <button
          onClick={() => {
            setFilterText('pending')
          }}
          className={`analysis_card pending ${
            filterText == 'pending' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="4" />
            <Text classname="count" value={"Pending Employee"} />
          </div>
          <FaUserClock color="orange" size={17} />
        </button>
      </div>
    </EmployeeAnalysisStyle>
  )
}

export default EmployeeAnalysis
