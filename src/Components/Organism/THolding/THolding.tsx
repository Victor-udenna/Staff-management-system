import HeaderText from '../../atoms/HeaderText/HeaderText'
import THoldingStyle from './THoldingStyle'

const THolding = () => {
  return (
    <THoldingStyle>
      <section>
        <div className="th-header_container">
          <HeaderText classname="th-header" value="Total Witholding" />
        </div>
      </section>
    </THoldingStyle>
  )
}

export default THolding
