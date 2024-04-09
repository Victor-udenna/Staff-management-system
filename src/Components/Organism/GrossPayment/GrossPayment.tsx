import HeaderText from '../../atoms/HeaderText/HeaderText'
import GrossPaymentStyle from './GrossPaymentStyle'

const GrossPayment = () => {
  return (
    <GrossPaymentStyle>
      <section>
        <div className="gross-header_container">
          <HeaderText classname="gross-header" value="Gross Payment" />
        </div>
      </section>
    </GrossPaymentStyle>
  )
}

export default GrossPayment
