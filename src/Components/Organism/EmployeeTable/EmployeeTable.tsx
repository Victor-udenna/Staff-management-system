import Gravatar from '../../atoms/Gravatar/Gravatar'
import Text from '../../atoms/Text/Text'
import EmployeeTableStyle from './EmployeeTableStyle'
import { BsThreeDots } from 'react-icons/bs'

type dataType = {
  employeedata: any
}

const EmployeeTable = ({ employeedata }: dataType) => {
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

  return (
    <EmployeeTableStyle>
      <table>
        <thead>
          <tr>
            <th className="header__input">
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date joined</th>
            <th className="more__header">more</th>
          </tr>
        </thead>
        <tbody>
          {employeedata.map((employee: any) => (
            <tr>
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
              <td>{formatrolelength(employee.job_title)}</td>
              <td>{employee.location}</td>
              <td>17-December 2023</td>
              <td className="more__icon">
                <BsThreeDots />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </EmployeeTableStyle>
  )
}

export default EmployeeTable
