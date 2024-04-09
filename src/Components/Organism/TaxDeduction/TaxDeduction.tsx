import TaxDeductionStyle from './TaxDeductionStyle'
import HeaderText from '../../atoms/HeaderText/HeaderText'

const TaxDeduction = () => {
  return (
    <TaxDeductionStyle>
      <section>
        <HeaderText
          classname="tax-deduction-header"
          value="Tax and Deduction"
        />
      </section>
    </TaxDeductionStyle>
  )
}

export default TaxDeduction
