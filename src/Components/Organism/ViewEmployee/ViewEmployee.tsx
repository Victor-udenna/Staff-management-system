import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../Config/firebase-config'
import ViewEmployeeStyle from './ViewEmployeeStyle'
import Text from '../../atoms/Text/Text'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import { Button } from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Select from 'react-select'
import { IoCloseSharp } from 'react-icons/io5'
import { UserData } from '../../Pages/Employee/Employee'

type ViewemployeeType = {
  closeModal: () => void
  employeeId: string
}

const ViewEmployee = ({ closeModal, employeeId }: ViewemployeeType) => {
  const [employee, setEmployee] = useState<any>(null)

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: 271,
      border: '1.4px solid #dfe6df',
    }),
    input: (provided: any) => ({
      ...provided,
      '&:focus': {
        outline: '1.4px solid #afe1af',
      },
    }),
  }

  const employmentTypeOptions: any = [
    { value: 'full_time', label: 'Full-Time Employment' },
    { value: 'part_time', label: 'Part-Time Employment' },
    { value: 'temporary', label: 'Temporary or Fixed-Term Employment' },
    { value: 'Internship', label: 'Internship Employment' },
  ]

  const locationTypeOptions: any = [
    { value: 'onsite', label: 'Onsite' },
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
  ]

  const jobTitlesOption: any = [
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'manager', label: 'Manager' },
    { value: 'analyst', label: 'Analyst' },
    { value: 'engineer', label: 'Engineer' },
    { value: 'consultant', label: 'Consultant' },
    { value: 'coordinator', label: 'Coordinator' },
    { value: 'specialist', label: 'Specialist' },
    { value: 'administrator', label: 'Administrator' },
    { value: 'supervisor', label: 'Supervisor' },
  ]

  const getEmployeeById = async (employeeId: string) => {
    try {
      const employeeDocRef = doc(db, 'Employees', employeeId)
      const docSnapshot = await getDoc(employeeDocRef)

      if (docSnapshot.exists()) {
        const employeeData = {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        } as UserData
        setEmployee(employeeData)
      } else {
        console.log('No matching document found.')
      }
    } catch (err) {
      console.error('Error fetching employee by ID:', err)
    }
  }

  useEffect(() => {
    getEmployeeById(employeeId)
  }, [])

  console.log(employee)

  return (
    <ViewEmployeeStyle>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal__header">
            <div className="button__container">
              <button>logo</button>
              <button onClick={closeModal} className="close__modal__btn">
                {' '}
                <IoCloseSharp size={24} />
              </button>
            </div>
            <HeaderText classname="header__text" value="Add employee" />
            <Text
              classname="header__desc"
              value={'Enter employee information'}
            />
          </div>

          <form>
            <div className="modal__body">
              <div className="modal__input__container">
                <label htmlFor="first_name">Fisrt name</label>
                <Input name="first_name" id="first_name" />
              </div>
              <div className="modal__input__container">
                <label htmlFor="last_name">Last name</label>
                <Input name="last_name" type="text" id="last_name" />
              </div>

              <div className="modal__input__container">
                <label htmlFor="email">Email</label>
                <Input name="email" type="mail" id="email" />
              </div>
              <div className="modal__input__container">
                <label htmlFor="phone_number">Mobile</label>
                <Input name="phone_number" type="tel" id="phone_number" />
              </div>
              <div className="modal__input__container">
                <label id="jobtitleId " htmlFor="jobtitle">
                  Job title
                </label>
                <Select
                  aria-labelledby="jobtitleId"
                  inputId="jobtitle"
                  styles={customStyles}
                  options={jobTitlesOption}
                />
              </div>

              <div className="modal__input__container">
                <label id="employmenttypeId" htmlFor="employmenttype">
                  Employment Type
                </label>
                <Select
                  aria-labelledby="employmenttypeId"
                  inputId="employementtype"
                  styles={customStyles}
                  options={employmentTypeOptions}
                />
              </div>

              <div className="modal__input__container">
                <label id="locationId" htmlFor="location">
                  Location
                </label>
                <Select
                  aria-labelledby="locationId"
                  inputId="location"
                  styles={customStyles}
                  options={locationTypeOptions}
                />
              </div>
              <div className="modal__input__container">
                <label id="locationId" htmlFor="location">
                  Status
                </label>
                <Select
                  aria-labelledby="statusId"
                  inputId="Status"
                  styles={customStyles}
                />
              </div>
            </div>
            <div className="modal__footer">
              <Button
                onclick={() => {
                  ('')
                }}
                classname="cancel__create__btn"
                value="Reset"
              />
              <Button
                onclick={() => {
                  ('')
                }}
                classname="create__employee__btn"
                value="Add employee"
              />
            </div>
          </form>
        </div>
      </div>
    </ViewEmployeeStyle>
  )
}

export default ViewEmployee
