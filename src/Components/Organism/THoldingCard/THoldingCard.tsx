import Gravatar from '../../atoms/Gravatar/Gravatar'
import Text from '../../atoms/Text/Text'
import THoldingCardStyle from './THoldingCardStyle'

const THoldingCard = () => {
  return (
    <THoldingCardStyle>
      <div className="tholding-card">
        <div className="tholding-card_header">
            <Gravatar
              className="card_avatar"
              firstname={'lastName'}
              lastname={'firstName'}
              size={1}
              background="random"
            />
            <div>
              <Text
                classname="card-header_text"
                value={`${'firstName'} ${'lastName'}`}
              />
              <Text classname="card-header_desc" value={'Frontend Developer'} />
          </div>
        </div>

        <div className="tholding-card_footer">
          <div className='tholding-item_container'>
          <Text classname='tholding-item' value={"Personal Income Tax"}/>
          <Text classname='percentage' value={'7%'}/>
          <div></div>
          </div>
        </div>
      </div>
    </THoldingCardStyle>
  )
}

export default THoldingCard
