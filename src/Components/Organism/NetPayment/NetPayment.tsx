import HeaderText from '../../atoms/HeaderText/HeaderText'
import NetPaymentStyle from './NetPaymentStyle'

const NetPayment = () => {
  return (
    <NetPaymentStyle>
      <section>
        <div className="netpayment-header_container">
          <HeaderText classname="netpayment-header" value="Net Payment" />
        </div>
      </section>
    </NetPaymentStyle>
  )
}

export default NetPayment
