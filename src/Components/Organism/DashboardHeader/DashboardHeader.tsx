import DashboardHeaderStyle from './DashboardHeaderStyle'
import { BiMessageDetail, BiBell } from 'react-icons/bi'
import userImg from '../../../assets/user.jpeg'
import Image from '../../atoms/Image/Image'
import Input from '../../atoms/Input/Input'
import { CiSearch } from 'react-icons/ci'
import Text from '../../atoms/Text/Text'
import { useState } from 'react'

type headerProp = {
  searchterm?: string
  buttonaction: any
  // submit?: () => void
  buttontext?: string
  placeholder?: string
  onchange?: any
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>
}

const DashboardHeader = ({
  placeholder,
  buttontext,
  buttonaction,
  setSearchTerm,
}: headerProp) => {
  const [searchTerm, setSearchTermLocal] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTermLocal(value)
    setSearchTerm && setSearchTerm(value)
  }
  return (
    <DashboardHeaderStyle>
      <div className="dashboard__header">
        <div className="search__input__container">
          <Input
            className="dashboard__header__search"
            placeholder={placeholder}
            type="search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="search_icon">
            <CiSearch color={'grey'} size={18} />
          </div>
        </div>
        <div className="dashboard__sub__container">
          <button onClick={buttonaction} className="dahsboard__header__button">
            {buttontext}
          </button>
          <div>
            <BiMessageDetail size={20} />
          </div>
          <div>
            <BiBell size={20} />
          </div>

          <div className="user__dashboard__profile">
            <div className="user_avatar_container">
              <Image alt="" className="user_avatar" image={userImg} />
            </div>
            <div>
              <Text classname="user_name" value={'Product Designer'} />
              <Text classname="company_name" value={'Crestmark ltd'} />
            </div>
          </div>
        </div>
      </div>
    </DashboardHeaderStyle>
  )
}

export default DashboardHeader
