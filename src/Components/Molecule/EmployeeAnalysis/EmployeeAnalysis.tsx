import EmployeeAnalysisStyle from './EmployeeAnalysisStyle'
import Text from '../../atoms/Text/Text'
import { MdPeople } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { FaUserClock } from 'react-icons/fa'
import { FaUserMinus } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TypedDispatch } from '../../../Config/configstore'
import { saveData } from '../../../redux/actions/DataAction'

const EmployeeAnalysis = () => {
  const [filterText, setFilterText] = useState<string>('all')
  const dispatch: TypedDispatch = useDispatch()

  const setToall = () => {
    dispatch(saveData({ id: 'all' }))
    setFilterText('all')
  }

  const setToactive = () => {
    dispatch(saveData({ id: 'active' }))
    setFilterText('active')
  }

  const setToInactive = () => {
    dispatch(saveData({ id: 'inactive' }))
    setFilterText('inactive')
  }

  const setToPending = () => {
    dispatch(saveData({ id: 'pending' }))
    setFilterText('pending')
  }

  return (
    <EmployeeAnalysisStyle>
      <div className="employee_analysis">
        <button
          onClick={setToall}
          className={`analysis_card total ${
            filterText == 'all' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="20" />
            <Text classname="count" value={'All Employee'} />
          </div>
          <MdPeople size={20} />
        </button>
        <button
          onClick={setToactive}
          className={`analysis_card active ${
            filterText == 'active' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="11" />
            <Text classname="count" value={'Active Employee'} />
          </div>
          <FaUserCheck color="#228b22" size={17} />
        </button>
        <button
          onClick={setToInactive}
          className={`analysis_card inactive ${
            filterText == 'inactive' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="5" />
            <Text classname="count" value={'Inactive Employee'} />
          </div>
          <FaUserMinus color="red" size={17} />
        </button>
        <button
          onClick={setToPending}
          className={`analysis_card pending ${
            filterText == 'pending' ? 'is_active' : ''
          }`}
        >
          <div>
            <Text classname="analysis_header" value="4" />
            <Text classname="count" value={'Pending Employee'} />
          </div>
          <FaUserClock color="orange" size={17} />
        </button>
      </div>
    </EmployeeAnalysisStyle>
  )
}

export default EmployeeAnalysis
