import PopupNotificationStyle from './PopupNotificatinStyle'
import { BsXCircle, BsCheckCircle } from 'react-icons/bs'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import { CiWarning } from 'react-icons/ci'
import Text from '../../atoms/Text/Text'

type Popuptype = {
  popuptext: string
  popuptype: string
}

const PopupNotification = ({ popuptext, popuptype }: Popuptype) => {
  return (
    <PopupNotificationStyle>
      <div className={`pop_up ${popuptype}`}>
        <div className={`icon_container ${popuptype}`}>
          {(popuptype === 'success' && <BsCheckCircle size={22} />) ||
            (popuptype === 'warning' && <CiWarning size={22} />) ||
            (popuptype === 'error' && <BsXCircle size={22} />)}
        </div>
        <div className="">
          <div className="pop_up_text_container">
            <HeaderText classname="pop_up_headertext" value={popuptype} />
            <Text classname="pop_up_text" value={popuptext} />
          </div>
        </div>
      </div>
    </PopupNotificationStyle>
  )
}

export default PopupNotification
