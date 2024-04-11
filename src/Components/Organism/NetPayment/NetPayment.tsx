import HeaderText from '../../atoms/HeaderText/HeaderText'
import NetPaymentCard from '../NetPaymentCard/NetPaymentCard'
import NetPaymentStyle from './NetPaymentStyle'

type GrosspaymentType = {
  firstName: string
  lastName: string
  role: string
}

const grossPayments: GrosspaymentType[] = [
  {
    firstName: "John",
    lastName: "Doe",
    role: "Manager"
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    role: "Engineer"
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    role: "Analyst"
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    role: "Designer"
  },
  {
    firstName: "David",
    lastName: "Williams",
    role: "Developer"
  },
  {
    firstName: "Sarah",
    lastName: "Jones",
    role: "Product Manager"
  },
  {
    firstName: "Michael",
    lastName: "Davis",
    role: "Sales Representative"
  }
]

const NetPayment = () => {
  return (
    <NetPaymentStyle>
      <section>
        <div className="netpayment-header_container">
          <HeaderText classname="netpayment-header" value="Net Payment" />
        </div>
        <div className='net-card_container'>
        {grossPayments.map((employee: any, index: any) => (
            <NetPaymentCard
              key={index}
              firstName={employee.firstName}
              lastName={employee.lastName}
              role={employee.role}
            />
          ))}
        </div>
      </section>
    </NetPaymentStyle>
  )
}

export default NetPayment
