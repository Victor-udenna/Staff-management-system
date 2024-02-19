import Text from '../../atoms/Text/Text'
import FetchMoreStyle from './FetchMoreStyle'

const FetchMore = () => {
  const currentLimit = 10
  const totalLimit = 25
  return (
    <FetchMoreStyle>
      <div className="fetchmore">
        <div className="count__text__container">
          {' '}
          <Text classname="count currentdata" value={currentLimit} />
          <Text classname="" value={'of'} />
          <Text classname="count totaldata" value={totalLimit} />
        </div>
        <button className="fetch_button">Load more</button>
      </div>
    </FetchMoreStyle>
  )
}

export default FetchMore
