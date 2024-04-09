import HeaderText from '../../atoms/HeaderText/HeaderText'
import GrossPaymentStyle from './GrossPaymentStyle'

const GrossPayment = () => {
  return (
    <GrossPaymentStyle>
      <section>
        <HeaderText classname="gross-header" value="Gross Payment" />
      </section>
    </GrossPaymentStyle>
  )
}

export default GrossPayment
