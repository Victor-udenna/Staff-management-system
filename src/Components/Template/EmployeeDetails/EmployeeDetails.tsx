import EmployeeDetailsStyle from './EmployeeDetailsStyle'
import SideBar from '../../Organism/SideBar/Sidebar'
import Text from '../../atoms/Text/Text'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'
import Image from '../../atoms/Image/Image'
import userImg from '../../../assets/user.jpeg'

const EmployeeDetails = () => {
  const navigate = useNavigate()

  const gotoEmployee = () => {
    navigate('/employee')
  }

  const { isLoading, data: employeeData } = useSelector(
    (state: RootStore) => state.employeeReducer
  )

  console.log(isLoading, employeeData)

  return (
    <EmployeeDetailsStyle>
      <main className="container">
        <SideBar />
        <section className="employee__details">
          <div className="header">
            <Text
              onclick={gotoEmployee}
              classname="header_text navlink"
              value={'Employee'}
            />
            <MdKeyboardArrowRight size={30} />
            <Text classname="header_text username" value={'Sanni Emmanuel'} />
          </div>
          <div className="banner">{''}</div>
          <div className="sub__header">
            <Image
              className="employee__img"
              alt="employee image"
              image={userImg}
            />

            <div className="text__container">
              <Text classname="name" value={'Sanni Emmanuel'} />
              <Text classname="email" value={'sanni@gmail.com'} />
            </div>
          </div>
        </section>
      </main>
    </EmployeeDetailsStyle>
  )
}

export default EmployeeDetails
