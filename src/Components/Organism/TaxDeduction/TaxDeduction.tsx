import TaxDeductionStyle from './TaxDeductionStyle'
import HeaderText from '../../atoms/HeaderText/HeaderText'

const TaxDeduction = () => {
  return (
    <TaxDeductionStyle>
      <section>
        <div className="tax-deduction-header_container">
          <HeaderText
            classname="tax-deduction-header"
            value="Tax and Deduction"
          />
        </div>
      </section>
    </TaxDeductionStyle>
  )
}

export default TaxDeduction
