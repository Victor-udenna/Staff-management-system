import React, { useState, useEffect } from 'react'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../Config/firebase-config'
import ViewEmployeeStyle from './ViewEmployeeStyle'
import Text from '../../atoms/Text/Text'
import { Button } from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Select from 'react-select'
import { IoCloseSharp } from 'react-icons/io5'
import Gravatar from '../../atoms/Gravatar/Gravatar'

type ViewemployeeType = {
  closeModal: () => void
  employeeId: string
  showSuccessModal: () => void
}

interface UpdateData {
  createdById: string
  email: string
  employment_type: string | any
  first_name: string
  id: string
  is_active: boolean
  job_title: string | any
  last_name: string
  location: string | any
  phone_number: string
  status: string
}

const ViewEmployee = ({
  closeModal,
  employeeId,
  showSuccessModal,
}: ViewemployeeType) => {
  const [employee, setEmployee] = useState<any>(null)
  const [fields, setFields] = useState({
    email: 'loading',
    first_name: 'loading',
    job_title: '',
    last_name: 'loading',
    location: 'loading',
    phone_number: '******',
    status: 'loading',
    employment_type: 'loading',
  })

  const [isloading, setIsloading] = useState(false)
  const isOnline = employee && employee.is_acive
  const defaultValue = employee

  const employeeCollection = collection(db, 'Employees')
  const employeeDocRef = doc(employeeCollection, employeeId)

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: 271,
      fontSize: '14px',
      border: '1.4px solid #dfe6df',
      color: 'grey',
    }),
    input: (provided: any) => ({
      ...provided,
      '&:focus': {
        outline: '1.4px solid #afe1af',
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#afe1af' : 'white',
      color: state.isFocused ? 'white' : 'black',
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

  const statusOption: any = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'Pending', label: 'pending' },
  ]

  const getEmployeeById = async (employeeId: string) => {
    try {
      const employeeDocRef = doc(db, 'Employees', employeeId)
      const docSnapshot = await getDoc(employeeDocRef)

      if (docSnapshot.exists()) {
        const employeeData = {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        } as UpdateData
        setEmployee(employeeData)
        setFields(employeeData)
      } else {
        console.log('No matching document found.')
      }
    } catch (err) {
      console.error('Error fetching employee by ID:', err)
    }
  }

  const handleInputChange = async (name: string, value: string | number) => {
    const fieldValues: any = Object.assign({}, fields)
    fieldValues[name] = value
    await setFields(fieldValues)
  }

  useEffect(() => {
    getEmployeeById(employeeId)
  }, [employeeId])

  const handleEmploymentChange = (selected: any) => {
    return setFields((prev) => ({
      ...prev,
      employment_type: selected,
    }))
  }

  const handleEmployeeJobtitle = (selected: any) => {
    return setFields((prev) => ({
      ...prev,
      job_title: selected,
    }))
  }

  const handleemployeeLocation = (selected: any) => {
    return setFields((prev) => ({
      ...prev,
      location: selected,
    }))
  }

  const handleemployeeStatus = (selected: any) => {
    return setFields((prev) => ({
      ...prev,
      status: selected,
    }))
  }

  const resetValue = (e: React.FormEvent) => {
    e.preventDefault()
    setFields(defaultValue)
  }

  const updateEmployee = (e: React.FormEvent) => {
    e.preventDefault()
    setIsloading(true)
    updateDoc(employeeDocRef, {
      email: fields.email,
      employment_type: fields.employment_type,
      first_name: fields.first_name,
      job_title: fields.job_title,
      last_name: fields.last_name,
      location: fields && fields.location,
      phone_number: fields.phone_number,
      status: fields.status,
    })
      .then(() => {
        console.log('Document successfully updated!')
        setIsloading(false)
        closeModal()
        showSuccessModal()
      })
      .catch((error) => {
        console.error('Error updating document: ', error)
        setIsloading(false)
      })
  }

  return (
    <ViewEmployeeStyle>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal__header">
            <div className="button__container">
              <Text classname="header__text" value="Employee Details" />
              <button onClick={closeModal} className="close__modal__btn">
                {' '}
                <IoCloseSharp size={24} />
              </button>
            </div>

            <div className="header__container">
              <Gravatar
                firstname={employee ? employee.first_name : 'loading'}
                lastname={employee ? employee.last_name : 'loading'}
                className="employee__img"
                background="random"
                size={1}
              />
              {isOnline ? (
                <div className="active_status_icon"></div>
              ) : (
                <div className="inactive_status_icon"></div>
              )}
            </div>
          </div>

          <form onSubmit={updateEmployee}>
            <div className="modal__body">
              <div className="modal__input__container">
                <label htmlFor="first_name">Fisrt name</label>
                <Input
                  name="first_name"
                  value={fields.first_name}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  id="first_name"
                  required
                />
              </div>
              <div className="modal__input__container">
                <label htmlFor="last_name">Last name</label>
                <Input
                  name="last_name"
                  type="text"
                  value={fields.last_name}
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  id="last_name"
                  required
                />
              </div>

              <div className="modal__input__container">
                <label htmlFor="email">Email</label>
                <Input
                  name="email"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  type="mail"
                  value={fields.email}
                  id="email"
                  required
                />
              </div>
              <div className="modal__input__container">
                <label htmlFor="phone_number">Mobile</label>
                <Input
                  name="phone_number"
                  type="tel"
                  value={fields.phone_number}
                  id="phone_number"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  required
                />
              </div>
              <div className="modal__input__container">
                <label id="jobtitleId " htmlFor="jobtitle">
                  Job title
                </label>
                <Select
                  aria-labelledby="jobtitleId"
                  placeholder={fields.job_title}
                  inputId="jobtitle"
                  styles={customStyles}
                  options={jobTitlesOption}
                  onChange={handleEmployeeJobtitle}
                  value={fields.job_title}
                  required
                />
              </div>

              <div className="modal__input__container">
                <label id="employmenttypeId" htmlFor="employmenttype">
                  Employment Type
                </label>
                <Select
                  aria-labelledby="employmenttypeId"
                  placeholder={fields.employment_type}
                  inputId="employementtype"
                  styles={customStyles}
                  options={employmentTypeOptions}
                  onChange={handleEmploymentChange}
                  value={fields.employment_type}
                  required
                />
              </div>

              <div className="modal__input__container">
                <label id="locationId" htmlFor="location">
                  Location
                </label>
                <Select
                  aria-labelledby="locationId"
                  placeholder={fields.location}
                  inputId="location"
                  styles={customStyles}
                  options={locationTypeOptions}
                  onChange={handleemployeeLocation}
                  value={fields.location}
                  required
                />
              </div>
              <div className="modal__input__container">
                <label id="locationId" htmlFor="location">
                  Status
                </label>
                <Select
                  aria-labelledby="statusId"
                  placeholder={fields.status}
                  inputId="Status"
                  styles={customStyles}
                  options={statusOption}
                  onChange={handleemployeeStatus}
                  value={fields.status}
                  required
                />
              </div>
            </div>
            <div className="modal__footer">
              <Button
                onclick={resetValue}
                classname="cancel__create__btn"
                value="Reset"
              />
              <Button
                classname="create__employee__btn"
                isloading={isloading}
                value="Save changes"
              />
            </div>
          </form>
        </div>
      </div>
    </ViewEmployeeStyle>
  )
}

export default ViewEmployee
