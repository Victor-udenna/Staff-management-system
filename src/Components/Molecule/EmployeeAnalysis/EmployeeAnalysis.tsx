import EmployeeAnalysisStyle from './EmployeeAnalysisStyle'
import Text from '../../atoms/Text/Text'
import { MdPeople } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaUserMinus } from 'react-icons/fa'
import { useState } from 'react'

const EmployeeAnalysis = () => {
  const [filterText, setFilterText] = useState<string>('')

  console.log(filterText)

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
            <Text classname="analysis_header" value="All Employee" />
            <Text classname="count" value={20} />
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
            <Text classname="analysis_header" value="Active Employee" />
            <Text classname="count" value={11} />
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
            <Text classname="analysis_header" value="Inactive Employee" />
            <Text classname="count" value={5} />
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
            <Text classname="analysis_header" value="Pending Employee" />
            <Text classname="count" value={4} />
          </div>
          <FaUserClock color="orange" size={17} />
        </button>
      </div>
    </EmployeeAnalysisStyle>
  )
}

export default EmployeeAnalysis
