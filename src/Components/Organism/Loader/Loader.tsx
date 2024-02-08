import LoaderStyle from './LoaderStyle'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
    <LoaderStyle>
      <div className="loader">
        <Bars
          height="80"
          width="80"
          color="#228b22"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </LoaderStyle>
  )
}

export default Loader
