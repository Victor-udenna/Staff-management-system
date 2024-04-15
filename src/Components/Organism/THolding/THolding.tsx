import HeaderText from '../../atoms/HeaderText/HeaderText'
import THoldingStyle from './THoldingStyle'
import THoldingCard from '../THoldingCard/THoldingCard'

const THolding = () => {
  return (
    <THoldingStyle>
      <section>
        <div className="th-header_container">
          <HeaderText classname="th-header" value="Total Witholding" />
        </div>
        <THoldingCard />
      </section>
    </THoldingStyle>
  )
}

export default THolding
