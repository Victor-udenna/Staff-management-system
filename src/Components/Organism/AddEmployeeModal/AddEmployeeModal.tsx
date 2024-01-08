import { useState } from 'react'
import AddemployeeModalStyle from './AddEmployeeModalStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { BsBuildingAdd } from 'react-icons/bs'
import Input from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import Text from '../../atoms/Text/Text'
import Select from 'react-select'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../Config/firebase-config'
import SuccessPopup from '../../Molecule/SucessPopup/SuccessPopup'
import { RootStore } from '../../../Config/configstore'
import { useSelector } from 'react-redux'

type AddemployeeType = {
  closeModal: any
}

interface UserData {
  email: string
  employment_type: any
  first_name: string
  is_active: boolean
  job_title: any
  last_name: string
  location: any
  phone_number: number
  status: string
}

const AddEmployeeModal = ({ closeModal }: AddemployeeType) => {
  const employeeDataList = collection(db, 'Employees')

  const state = useSelector((state: RootStore) => state.saveAuthReducer)
  const createdById = state.result.data.uid

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

  const [fields, setFields] = useState<UserData>({
    email: '',
    employment_type: '',
    first_name: '',
    is_active: false,
    job_title: '',
    last_name: '',
    location: '',
    phone_number: 0,
    status: '',
  })

  const [isloading, setisLoading] = useState(false)
  const [succesmessage, setSuccessmessage] = useState(false)

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

  const handleInputchange = async (name: string, value: any) => {
    const fieldsValues: any = Object.assign({}, fields)
    fieldsValues[name] = value
    await setFields(fieldsValues)
  }

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

  const createEmployee = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setisLoading(true)
      await addDoc(employeeDataList, {
        createdById: createdById,
        email: fields.email,
        employment_type: fields.employment_type.value,
        first_name: fields.first_name,
        is_active: false,
        job_title: fields.job_title.value,
        last_name: fields.last_name,
        location: fields.location.value,
        phone_number: fields.phone_number,
        status: 'pending',
      })
      setSuccessmessage(true)
      setTimeout(() => {
        closeModal()
      }, 1000)
    } catch (err) {
      console.log(err)
      setisLoading(false)
    }
  }

  const resetForm = () => {
    setFields({
      email: '',
      employment_type: '',
      first_name: '',
      is_active: false,
      job_title: '',
      last_name: '',
      location: '',
      phone_number: 0,
      status: '',
    })
  }

  return (
    <AddemployeeModalStyle>
      {succesmessage && <SuccessPopup text={'Employee added succesfully'} />}
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal__header">
            <div className="button__container">
              <button>
                <BsBuildingAdd size={24} />
              </button>
              <button onClick={closeModal} className="close__modal__btn">
                <IoCloseSharp size={24} />
              </button>
            </div>
            <HeaderText classname="header__text" value="Add employee" />
            <Text
              classname="header__desc"
              value={'Enter employee information'}
            />
          </div>

          <form onSubmit={createEmployee}>
            <div className="modal__body">
              <div className="modal__input__container">
                <label htmlFor="first_name">Fisrt name</label>
                <Input
                  name="first_name"
                  value={fields.first_name}
                  onChange={(e) =>
                    handleInputchange(e.target.name, e.target.value)
                  }
                  id="first_name"
                />
              </div>
              <div className="modal__input__container">
                <label htmlFor="last_name">Last name</label>
                <Input
                  name="last_name"
                  value={fields.last_name}
                  onChange={(e) =>
                    handleInputchange(e.target.name, e.target.value)
                  }
                  type="text"
                  id="last_name"
                />
              </div>

              <div className="modal__input__container">
                <label htmlFor="email">Email</label>
                <Input
                  name="email"
                  value={fields.email}
                  onChange={(e) =>
                    handleInputchange(e.target.name, e.target.value)
                  }
                  type="mail"
                  id="email"
                />
              </div>
              <div className="modal__input__container">
                <label htmlFor="phone_number">Mobile</label>
                <Input
                  name="phone_number"
                  value={fields.phone_number}
                  onChange={(e) =>
                    handleInputchange(e.target.name, e.target.value)
                  }
                  type="tel"
                  id="phone_number"
                />
              </div>
              <div className="modal__input__container">
                <label id="jobtitleId " htmlFor="jobtitle">
                  Job title
                </label>
                <Select
                  aria-labelledby="jobtitleId"
                  inputId="jobtitle"
                  options={jobTitlesOption}
                  styles={customStyles}
                  onChange={handleEmployeeJobtitle}
                  value={fields.job_title}
                />
              </div>

              <div className="modal__input__container">
                <label id="employmenttypeId" htmlFor="employmenttype">
                  Employment Type
                </label>
                <Select
                  aria-labelledby="employmenttypeId"
                  inputId="employementtype"
                  options={employmentTypeOptions}
                  styles={customStyles}
                  value={fields.employment_type}
                  onChange={handleEmploymentChange}
                />
              </div>

              <div className="modal__input__container">
                <label id="locationId" htmlFor="location">
                  Location
                </label>
                <Select
                  aria-labelledby="locationId"
                  options={locationTypeOptions}
                  inputId="location"
                  styles={customStyles}
                  onChange={handleemployeeLocation}
                  value={fields.location}
                />
              </div>
            </div>
            <div className="modal__footer">
              <Button
                onclick={resetForm}
                classname="cancel__create__btn"
                value="Reset"
              />
              <Button
                isloading={isloading}
                classname="create__employee__btn"
                value="Add employee"
              />
            </div>
          </form>
        </div>
      </div>
    </AddemployeeModalStyle>
  )
}

export default AddEmployeeModal
