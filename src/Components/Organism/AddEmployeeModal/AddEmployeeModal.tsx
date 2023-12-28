import AddemployeeModalStyle from './AddEmployeeModalStyle'
import { IoCloseSharp } from 'react-icons/io5'
import { BsBuildingAdd } from 'react-icons/bs'
import Input from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import Text from '../../atoms/Text/Text'
import Select from 'react-select'

type AddemployeeType = {
  closeModal: any
}

const AddEmployeeModal = ({ closeModal }: AddemployeeType) => {
  const employmentTypeOptions = [
    { value: 'full_time', label: 'Full-Time Employment' },
    { value: 'part_time', label: 'Part-Time Employment' },
    { value: 'temporary', label: 'Temporary or Fixed-Term Employment' },
    { value: 'Internship', label: 'Internship Employment' },
  ]

  const locationTypeOptions = [
    { value: 'onsite', label: 'Onsite' },
    { value: 'remote', label: 'Remote' },
    { value: 'hybrid', label: 'Hybrid' },
  ]

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

  return (
    <AddemployeeModalStyle>
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

          <form className="modal__body">
            <div className="modal__input__container">
              <label htmlFor="name">Fisrt name</label>
              <Input id="name" />
            </div>
            <div className="modal__input__container">
              <label htmlFor="name">Last name</label>
              <Input id="name" />
            </div>

            <div className="modal__input__container">
              <label htmlFor="name">Email</label>
              <Input id="name" />
            </div>
            <div className="modal__input__container">
              <label htmlFor="name">Mobile</label>
              <Input id="name" />
            </div>
            <div className="modal__input__container">
              <label htmlFor="name">Job title</label>
              <Select options={employmentTypeOptions} styles={customStyles} />
            </div>

            <div className="modal__input__container">
              <label htmlFor="name">Employment Type</label>
              <Select options={locationTypeOptions} styles={customStyles} />
            </div>

            <div className="modal__input__container">
              <label htmlFor="name">Location</label>
              <Select options={employmentTypeOptions} styles={customStyles} />
            </div>
          </form>
          <div className="modal__footer">
            <Button classname="cancel__create__btn" value="Cancel" />
            <Button classname="create__employee__btn" value="Add employee" />
          </div>
        </div>
      </div>
    </AddemployeeModalStyle>
  )
}

export default AddEmployeeModal
