import Text from '../../atoms/Text/Text'
import FetchMoreStyle from './FetchMoreStyle'

type FetchMore = {
currentLimit: number;
totalCount: number;
isdisabled: boolean;
handlePagelimit: any
}

const FetchMore = ({currentLimit, totalCount, isdisabled, handlePagelimit} : FetchMore) => {

  return (
    <FetchMoreStyle>
      <div className="fetchmore">
        <div className="count__text__container">
          {' '}
          <Text classname="count currentdata" value={currentLimit} />
          <Text classname="" value={'of'} />
          <Text classname="count totaldata" value={totalCount} />
        </div>
        <button onClick={handlePagelimit}  disabled={isdisabled} className="fetch_button">Load more</button>
      </div>
    </FetchMoreStyle>
  )
}

export default FetchMore
