import HeaderText from '../../atoms/HeaderText/HeaderText'
import THoldingStyle from './THoldingStyle'

const THolding = () => {
  return (
    <THoldingStyle>
      <section>
        <HeaderText classname="th-header" value="Total Witholding" />
      </section>
    </THoldingStyle>
  )
}

export default THolding;
