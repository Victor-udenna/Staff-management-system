import HeaderText from '../../atoms/HeaderText/HeaderText'
import GrossPaymentStyle from './GrossPaymentStyle'
import GrossPaymentCard from '../GrossPaymentCard/GrossPaymentCard'

type GrosspaymentType = {
  firstName: string
  lastName: string
  role: string
}

const grossPayments: GrosspaymentType[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Manager',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    role: 'Engineer',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    role: 'Analyst',
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
    role: 'Designer',
  },
  {
    firstName: 'David',
    lastName: 'Williams',
    role: 'Developer',
  },
  {
    firstName: 'Sarah',
    lastName: 'Jones',
    role: 'Product Manager',
  },
  {
    firstName: 'Michael',
    lastName: 'Davis',
    role: 'Sales Representative',
  },
]

const GrossPayment = () => {
  return (
    <GrossPaymentStyle>
      <section>
        <div className="gross-header_container">
          <HeaderText classname="gross-header" value="Gross Payment" />
        </div>
        <div className="gross-card_container">
          {grossPayments.map((employee: any, index: any) => (
            <GrossPaymentCard
              key={index}
              firstName={employee.firstName}
              lastName={employee.lastName}
              role={employee.role}
            />
          ))}
        </div>
      </section>
    </GrossPaymentStyle>
  )
}

export default GrossPayment
