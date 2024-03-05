import { useState } from 'react'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import Text from '../../atoms/Text/Text'
import EmployeeTableStyle from './EmployeeTableStyle'
import { BsThreeDots } from 'react-icons/bs'
import { Button } from '../../atoms/Button/Button'
import Nodata from '../Nodata/Nodata'
import FetchMore from '../../Molecule/FetchMore/FetchMore'
import ViewEmployee from '../ViewEmployee/ViewEmployee'
import SuccessModal from '../../Molecule/SuccessModal/SuccessModal'
import { useDispatch } from 'react-redux'
import { TypedDispatch } from '../../../Config/configstore'
import { saveChat } from '../../../redux/actions/ChatAction'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../Config/firebase-config'
import { doc, collection, updateDoc } from 'firebase/firestore'

type dataType = {
  employeedata: any
}

const EmployeeTable = ({ employeedata }: dataType) => {
  let timeOutId: any = null
  const [selectedMenu, setSelectedMenu] = useState(false)
  const [selectedId, setSelectedId] = useState('id')
  const [loadactiveButton, setLoadactivebutton] = useState(false)
  const [loadinactiveButton, setLoadinactivebutton] = useState(false)
  const [viewemployee, setViewEmployee] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const dispatch: TypedDispatch = useDispatch()
  const navigate = useNavigate()

  const employeeCollection = collection(db, 'Employees')
  const employeeDocRef = doc(employeeCollection, selectedId)

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

  const reloadPage = () => {
    window.location.reload()
  }

  const showSuccessModal = () => {
    setSuccessModal(true)
  }

  const closeSuccessModal = () => {
    setSuccessModal(false)
  }

  const messageEmployee = async () => {
    await dispatch(saveChat({ id: selectedId }))
    navigate('/Communication')
  }

  const setEmployeetoActive = () => {
    updateDoc(employeeDocRef, {
      ['status']: { label: 'Active', value: 'active' },
    })
      .then(() => {
        console.log('Document successfully updated!')
        setLoadactivebutton(true)
        reloadPage()
      })
      .catch((error) => {
        console.error('Error updating document: ', error)
        setLoadactivebutton(false)
      })
  }

  const setEmployeetoInactive = () => {
    updateDoc(employeeDocRef, {
      ['status']: { label: 'Inctive', value: 'inactive' },
    })
      .then(() => {
        console.log('Document successfully updated!')
        setLoadinactivebutton(true)
        reloadPage()
      })
      .catch((error) => {
        setLoadinactivebutton(false)
        console.error('Error updating document: ', error)
      })
  }

  return (
    <EmployeeTableStyle>
      {viewemployee && (
        <ViewEmployee
          showSuccessModal={showSuccessModal}
          closeModal={closeViewEmployee}
          employeeId={selectedId}
        />
      )}

      {isSuccessModal && (
        <SuccessModal
          closeSuccessModal={closeSuccessModal}
          reloadPage={reloadPage}
          headerText="Success"
          text="Employee edited Succesfully"
        />
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
                          {employee.status.value == 'active' ? (
                            <Button
                              classname="status__btn"
                              value="Deactivate"
                              isloading={loadinactiveButton}
                              onclick={setEmployeetoInactive}
                            />
                          ) : (
                            <Button
                              onclick={setEmployeetoActive}
                              isloading={loadactiveButton}
                              classname="status__btn"
                              value="Activate"
                            />
                          )}

                          <Button
                            onclick={messageEmployee}
                            classname="status__btn"
                            value="Message"
                          />
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
