import HeaderText from '../../atoms/HeaderText/HeaderText'
import NetPaymentStyle from './NetPaymentStyle'

const NetPayment = () => {
  return (
    <NetPaymentStyle>
      <section>
        <HeaderText classname="netpayment-header" value="Net Payment" />
      </section>
    </NetPaymentStyle>
  )
}

export default NetPayment
