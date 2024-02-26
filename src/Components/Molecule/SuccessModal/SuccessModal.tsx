import { useEffect } from 'react'
import SuccessModalStyle from './SuccessModalStyle'
import Image from '../../atoms/Image/Image'
import successGif from '../../../assets/success-animation.gif'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import Text from '../../atoms/Text/Text'

interface PopupModalprop {
    headerText: string
    text: string
    closeSuccessModal: ()=> void
    reloadPage: ()=> void
}

const SuccessModal = ({headerText, text, closeSuccessModal, reloadPage}: PopupModalprop) => {

useEffect(()=>{
window.setTimeout(()=> {
closeSuccessModal()
reloadPage()
}, 3000)
}, [])

  return (
    <SuccessModalStyle>
      <div className="modal open">
        <div className="modal-content">
          <div className="gif__container">
            <Image
              className=""
              image={successGif}
              alt=" success icon animation"
            />
          </div>
          <div>
            <HeaderText value={headerText} classname="success__header__text" />
            <Text
              value={text}
              classname="success__text"
            />
          </div>
        </div>
      </div>
    </SuccessModalStyle>
  )
}

export default SuccessModal
