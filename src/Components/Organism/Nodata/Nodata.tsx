import { Button } from '../../atoms/Button/Button'
import NodataStyle from './NodataStyle'
import nodataimg from '../../../assets/nodata.svg'
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'

const Nodata = () => {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <NodataStyle>
      <section className="noData">
        <Image className="nodataImg" alt="" image={nodataimg} />
        <div className='nodata_text__container'>
          <Text classname="nodata_text" value={'No data found'} />
          <Button
            classname="reload__btn"
            onclick={reloadPage}
            value="Reload page"
          />
        </div>
      </section>
    </NodataStyle>
  )
}

export default Nodata
