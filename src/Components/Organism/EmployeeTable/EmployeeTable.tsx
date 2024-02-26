import { useState } from 'react'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import Text from '../../atoms/Text/Text'
import EmployeeTableStyle from './EmployeeTableStyle'
import { BsThreeDots } from 'react-icons/bs'
import { Button } from '../../atoms/Button/Button'
import Nodata from '../Nodata/Nodata'
import FetchMore from '../../Molecule/FetchMore/FetchMore'
import ViewEmployee from '../ViewEmployee/ViewEmployee'

type dataType = {
  employeedata: any
}

const EmployeeTable = ({ employeedata }: dataType) => {
  let timeOutId: any = null
  const [selectedMenu, setSelectedMenu] = useState(false)
  const [selectedId, setSelectedId] = useState('')
  const [viewemployee, setViewEmployee] = useState(false)

  const onClickHandler = (value: boolean, id: string) => {
    if (selectedMenu !== false) {
      setSelectedMenu(false)
      return id
    }
    setSelectedMenu(value)
    setSelectedId(id)
  }

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setSelectedMenu(false)
    })
  }

  const onFocusHandler = () => {
    clearTimeout(timeOutId)
  }

  const formatrolelength = (message: string) => {
    if (message.length > 15) {
      const formatedText = message.slice(0, 15) + ' ...'
      return formatedText
    } else {
      return message
    }
  }

  const formatmaillength = (message: string) => {
    if (message.length > 15) {
      const formatedText = message.slice(0, 15) + ' ...'
      return formatedText
    } else {
      return message
    }
  }

  const openViewEmployee = () => {
    if (selectedId) {
      setViewEmployee(true)
    }
  }

  const closeViewEmployee = () => {
    setViewEmployee(false)
  }

  return (
    <EmployeeTableStyle>
      {viewemployee && (
        <ViewEmployee closeModal={closeViewEmployee} employeeId={selectedId} />
      )}
      <table>
        <thead>
          <tr>
            <th className="header__input">
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Date joined</th>
            <th>Status</th>
            <th className="more__header">more</th>
          </tr>
        </thead>
        <tbody>
          {employeedata.length > 0 &&
            employeedata.map((employee: any) => {
              return (
                <tr key={employee.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="employee__name__container">
                    <Gravatar
                      background="random"
                      size={1}
                      firstname={employee.first_name}
                      lastname={employee.last_name}
                      className="employee__avatar"
                    />
                    <Text
                      classname="employee__name"
                      value={`${employee.first_name} ${employee.last_name}`}
                    />
                  </td>
                  <td>{formatmaillength(employee.email)}</td>
                  <td>{formatrolelength(employee.job_title.value)}</td>
                  <td>17-December 2023</td>
                  <td>{employee.location.value}</td>
                  <td className="more__icon">
                    <div
                      className="pop__up__container"
                      onBlur={() => onBlurHandler()}
                      onFocus={() => onFocusHandler()}
                    >
                      <button
                        aria-haspopup="true"
                        onClick={() => onClickHandler(true, employee.id)}
                        aria-expanded={selectedMenu}
                        className="popup__btn"
                      >
                        <span>
                          <BsThreeDots />
                        </span>
                      </button>
                      {selectedMenu !== false && selectedId === employee.id && (
                        <div className="pop__up">
                          <Button
                            classname="view__btn"
                            onclick={openViewEmployee}
                            value="view"
                          />
                          <Button classname="status__btn" value="Deactivate" />
                          <Button classname="status__btn" value="Message" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {employeedata.length > 0 && (
        <FetchMore
          isdisabled={false}
          currentLimit={10}
          totalCount={employeedata.length}
          handlePagelimit={''}
        />
      )}
      {employeedata < 0 || (employeedata == 0 && <Nodata />)}
    </EmployeeTableStyle>
  )
}

export default EmployeeTable
